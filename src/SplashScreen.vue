<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { loadModules } from "./utils/load-modules";
import { modules } from "./configs";
import { t } from "./utils/splash-i18n";

const loadingProgress = ref(0);
const loadingMessage = ref(t('loading'));
const currentModule = ref("");
const totalModules = ref(0);
const completedModules = ref(0);
const showError = ref(false);
const showTimeout = ref(false);
const errorMessage = ref("");

// Permission dialog state
const showPermissionDialog = ref(false);
const permissionMessage = ref("");
const permissionType = ref<'prompt' | 'denied'>('prompt');
let permissionResolve: ((value: boolean) => void) | null = null;

// Theme detection
const currentTheme = ref<'light' | 'dark'>('light');

const detectTheme = () => {
  try {
    // If no saved theme, check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      currentTheme.value = 'dark';
    } else {
      currentTheme.value = 'light';
    }
  } catch {
    // Fallback to light theme if localStorage is not available
    currentTheme.value = 'light';
  }
};

// Apply theme to document
const applyTheme = () => {
  if (currentTheme.value === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  // Diagnostic logging to validate CSS variables
  console.info('[Splash Screen] Theme applied:', currentTheme.value);
};

const progressPercentage = computed(() => {
  return Math.round((loadingProgress.value / 100) * 100);
});

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

// Custom confirm dialog for permissions
const permissionConfirm = (messageId: string): Promise<boolean> => {
  permissionMessage.value = t(messageId as Parameters<typeof t>[0]);
  showPermissionDialog.value = true;

  return new Promise((resolve) => {
    permissionResolve = (value: boolean) => {
      showPermissionDialog.value = false;
      resolve(value);
    };
  });
};

const handlePermissionAllow = () => {
  permissionResolve?.(true);
};

const handlePermissionDeny = () => {
  permissionResolve?.(false);
};

// Expose permission confirm function globally for module initialization
window.permissionConfirm = permissionConfirm;

onMounted(() => {
  // Detect and apply theme
  detectTheme();
  applyTheme();

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

  console.log("=== Start Loading Modules ===")

  loadModules(modules, "trackmaker", 30000, {
    logger,
    progressReporter,
    printLog: !__RELEASE_MODE__,
  })
    .then(() => {
      loadingMessage.value = "All modules loaded successfully";
      currentModule.value = "TrackMaker";
      loadingProgress.value = 100;

      console.log("=== All Modules Loaded ===")
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

      console.log("=== Failed to initialize all modules ===");
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

      <div
        v-if="showPermissionDialog"
        class="permission-section"
      >
        <div class="permission-icon">
          📍
        </div>
        <h2>{{ t('permission.title') }}</h2>
        <p class="permission-message">
          {{ permissionMessage }}
        </p>
        <div class="permission-buttons">
          <button
            class="permission-button deny"
            @click="handlePermissionDeny"
          >
            {{ t('permission.deny') }}
          </button>
          <button
            class="permission-button allow"
            @click="handlePermissionAllow"
          >
            {{ t('permission.allow') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* CSS variables are now globally defined */
.splash-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-middle) 50%, var(--bg-gradient-end) 100%);
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
  color: var(--text-secondary);
  opacity: 0.9;
  filter: drop-shadow(0px 1px 2px var(--logo-shadow)) drop-shadow(0px 3px 8px var(--logo-shadow));
}

.app-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
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
  background: var(--progress-bg);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--progress-fill-start) 0%, var(--progress-fill-end) 100%);
  transition: width 0.3s ease;
  border-radius: 3px;
}

.progress-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}

.loading-details {
  margin-bottom: 2rem;
}

.current-module {
  color: var(--text-tertiary);
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
  border: 3px solid var(--spinner-border);
  border-top: 3px solid var(--spinner-top);
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
  color: var(--text-quaternary);
}

.error-icon,
.timeout-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.error-section h2,
.timeout-section h2 {
  color: var(--text-secondary);
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.error-message {
  color: var(--text-error);
  margin: 0 0 1.5rem 0;
  font-size: 0.9rem;
  background: var(--error-bg);
  padding: 1rem;
  border-radius: 8px;
  max-height: 200px;
  overflow-y: auto;
  text-align: left;
}

.retry-button {
  background: var(--button-bg);
  border: 1px solid var(--button-border);
  color: var(--button-text);
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.retry-button:hover {
  background: var(--button-bg);
  opacity: 0.8;
  transform: translateY(-1px);
}

.permission-section {
  position: fixed;

  top: 30%;
  left: 32px;
  right: 32px;
  background: var(--splash-overlay-bg);
  padding: 2rem 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--text-quaternary);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  z-index: 10000;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.permission-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.permission-section h2 {
  color: var(--text-secondary);
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.permission-message {
  color: var(--text-tertiary);
  margin: 0 0 1.5rem 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.permission-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.permission-button {
  padding: 0.6rem 1.25rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.permission-button.allow {
  background: var(--button-bg);
  border-color: var(--button-border);
  color: var(--button-text);
}

.permission-button.deny {
  background: transparent;
  border-color: var(--text-quaternary);
  color: var(--text-tertiary);
}

.permission-button:hover {
  opacity: 0.85;
}

.permission-button.allow:hover {
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
