<script setup lang="ts">
import { onMounted, ref, computed, createApp } from "vue";
import { loadModules } from "./utils/load-modules";
import { modules } from "./configs";
import { createPinia } from "pinia";

const loadingProgress = ref(0);
const loadingMessage = ref("Initializing...");
const currentModule = ref("");
const totalModules = ref(0);
const completedModules = ref(0);
const showError = ref(false);
const showTimeout = ref(false);
const errorMessage = ref("");

const progressPercentage = computed(() => {
  return Math.round((loadingProgress.value / 100) * 100);
});

const mountApp = async () => {
  const app = createApp((await import("./App.vue")).default);
  app.use(createPinia());
  app.use((await import("./router")).default);
  app.use((await import("@/locales")).i18n);

  const appContainer = document.getElementById("app");
  if (appContainer) appContainer.style.display = "inherit";
  document.getElementById("splash")?.remove();
  app.mount("#app");
};

const logger = {
  info: (...args: unknown[]) => {
    const message = args.join(" ");
    console.info(message);
    loadingMessage.value = String(message);
  },
  warn: (...args: unknown[]) => {
    const message = args.join(" ");
    console.warn(message);
    loadingMessage.value = String(message);
  },
  error: (...args: unknown[]) => {
    const message = args.join(" ");
    console.error(message);
    loadingMessage.value = String(message);
    errorMessage.value = String(message);
  },
  debug: (...args: unknown[]) => {
    console.debug(...args);
  },
};

const progressReporter = {
  onModuleStart: (moduleName: string) => {
    currentModule.value = moduleName;
    loadingMessage.value = `Loading ${moduleName}...`;
  },
  onModuleComplete: (moduleName: string) => {
    completedModules.value++;
    loadingProgress.value = Math.min(
      100,
      (completedModules.value / totalModules.value) * 100
    );
    loadingMessage.value = `Loaded ${moduleName}`;
  },
  onModuleError: (moduleName: string, error: Error) => {
    loadingMessage.value = `Failed to load ${moduleName}`;
    errorMessage.value = error.message;
  },
  onOverallProgress: (completed: number, total: number) => {
    totalModules.value = total;
    completedModules.value = completed;
    loadingProgress.value = Math.min(100, (completed / total) * 100);
  },
};

const handleRetry = () => {
  window.location.reload();
};

onMounted(() => {
  document.getElementById("pre-splash")?.remove();

  // Count total modules including dependencies
  const countModules = (
    moduleName: string,
    visited = new Set<string>()
  ): number => {
    if (visited.has(moduleName)) return 0;
    visited.add(moduleName);

    const module = modules.find((m) => m.name === moduleName);
    if (!module) return 0;

    let count = 1;
    if (module.dependencies) {
      for (const dep of module.dependencies) {
        count += countModules(dep, visited);
      }
    }
    return count;
  };

  totalModules.value = countModules("trackmaker");

  loadModules(modules, "trackmaker", 30000, {
    logger,
    progressReporter,
    printLog: !__RELEASE_MODE__,
  })
    .then(() => {
      loadingMessage.value = "All modules loaded successfully";
      currentModule.value = "TrackMaker";
      loadingProgress.value = 100;

      // Small delay to show completion
      setTimeout(() => {
        mountApp();
      }, 1000);
    })
    .catch((e) => {
      const msg = String(e.toString());

      if (msg.toLowerCase().includes("timeout")) {
        const trackback = msg
          .split("Trackback")
          .map((s) => s.replace(/((^:\s*)|(,\s*$))/g, ""));

        console.table(
          trackback.map((t) => ({ Trackback: t })),
          ["Trackback"]
        );

        showTimeout.value = true;
      } else {
        errorMessage.value = msg;
        showError.value = true;
      }

      console.error("Failed to initialize all modules");
      console.error(e);
    });
});
</script>

<template>
  <div class="splash-container">
    <div class="splash-content">
      <div class="logo-section">
        <div class="app-logo">
          <img
            src="/favicon.svg"
            alt="TrackMaker Logo"
            height="80"
            width="80"
          >
        </div>
        <h1 class="app-title">
          TrackMaker
        </h1>
      </div>

      <div
        v-if="!showError && !showTimeout"
        class="loading-section"
      >
        <div class="progress-container">
          <div class="progress-bar">
            <div
              class="progress-fill"
              :style="{ width: `${progressPercentage}%` }"
            />
          </div>
          <div class="progress-text">
            {{ progressPercentage }}%
          </div>
        </div>

        <div class="loading-details">
          <p class="current-module">
            Loading: {{ currentModule }}
          </p>
        </div>

        <div class="loading-animation">
          <div class="spinner" />
        </div>
      </div>

      <div
        v-if="showError"
        class="error-section"
      >
        <div class="error-icon">
          ⚠️
        </div>
        <h2>Loading Error</h2>
        <div class="error-message">
          <div
            v-for="line in (errorMessage ?? '').split('\n')"
            :key="line"
            style="display: block; font-family: monospace; overflow: auto"
          >
            <strong v-if="line.toLocaleLowerCase().includes('trackback')">{{
              line
            }}</strong>
            <span v-else>{{ line }}</span>
          </div>
        </div>
        <button
          class="retry-button"
          @click="handleRetry"
        >
          Retry
        </button>
      </div>

      <div
        v-if="showTimeout"
        class="timeout-section"
      >
        <div class="timeout-icon">
          ⏰
        </div>
        <h2>Connection Timeout</h2>
        <p>Unable to load required modules within the timeout period.</p>
        <p>Please check your internet connection and try again.</p>
        <button
          class="retry-button"
          @click="handleRetry"
        >
          Retry
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.splash-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #d8e9fc 0%, #ffffff 50%, #e0fffb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.splash-content {
  text-align: center;
  max-width: 400px;
  padding: 2rem;
}

.logo-section {
  margin-bottom: 3rem;
}

.app-logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  color: rgb(142, 142, 142);
  opacity: 0.9;
  filter: drop-shadow(0px 1px 2px #5b5b5ba8) drop-shadow(0px 3px 8px #5b5b5b57);
}

.app-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(75, 75, 75);
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.loading-section {
  width: 100%;
}

.progress-container {
  margin-bottom: 2rem;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #31ba8c 0%, #00a32e 100%);
  transition: width 0.3s ease;
  border-radius: 3px;
}

.progress-text {
  color: rgb(142, 142, 142);
  font-size: 0.9rem;
  font-weight: 500;
}

.loading-details {
  margin-bottom: 2rem;
}

.current-module {
  color: rgb(103, 103, 103);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.loading-animation {
  display: flex;
  justify-content: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(144, 144, 144, 0.3);
  border-top: 3px solid rgb(142, 142, 142);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error-section,
.timeout-section {
  color: rgb(107, 107, 107);
}

.error-icon,
.timeout-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.error-section h2,
.timeout-section h2 {
  color: rgb(104, 104, 104);
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.error-message {
  color: rgba(105, 105, 105, 0.9);
  margin: 0 0 1.5rem 0;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 8px;
  max-height: 200px;
  overflow-y: auto;
  text-align: left;
}

.retry-button {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgb(142, 142, 142);
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.retry-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

@media (max-width: 480px) {
  .splash-content {
    padding: 1rem;
  }

  .app-title {
    font-size: 2rem;
  }
}
</style>
