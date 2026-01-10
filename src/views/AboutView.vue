<script setup>
import {
  NH1,
  NP,
  NDivider,
  NImage,
  NCard,
  NCollapse,
  NCollapseItem,
  NIcon,
  NList,
  NListItem,
  NTag,
  NSpace,
  NAnchor,
  NAnchorLink,
  useThemeVars,
  NCode,
} from "naive-ui";
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import VueMarkdown from "vue-markdown-render";
import { BrandGithub, Link, FileText } from "@vicons/tabler";
import { credits, dataProviders } from "@/configs";
import aboutPageLicense from "@/assets/about-page-license.txt?raw";

const theme = useThemeVars();

const { t } = useI18n();

const showAnchor = ref(false);
const handleResize = () => {
  showAnchor.value = window.innerWidth >= 700;
};
onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const logo = ref(new URL("/favicon.svg", import.meta.url).href);

const commitId = __MOST_RECENT_COMMIT__;
const devMode = !__RELEASE_MODE__;

const processLicenseText = (s) =>
  s
    .trim()
    .replace(/\n([\s]*)\n/, "\n\n")
    .split("\n\n")
    .map((l) =>
      l
        .split("\n")
        .map((s) => s.trim())
        .join(" ")
    )
    .join("\n\n")
    .trim();

const sideIconSize = ref(20);
</script>

<template>
  <div class="about-view">
    <n-anchor
      v-if="showAnchor"
      class="page-anchor"
      :show-rail="true"
      :show-background="true"
    >
      <n-anchor-link
        :title="t('aboutView.sections.project')"
        href="#project"
      />
      <n-anchor-link
        :title="t('aboutView.sections.dataSource')"
        href="#data-sources"
      />
      <n-anchor-link
        :title="t('aboutView.sections.credits')"
        href="#credits"
      />
    </n-anchor>
    <!-- Project Section -->
    <section
      id="project"
      class="section project-section"
    >
      <n-card>
        <div class="project-header">
          <n-image
            width="100"
            :src="logo"
            preview-disabled
          />
          <div style="width: 100%;">
            <n-h1>Trackmaker</n-h1>
            <div v-if="commitId || devMode">
              <n-p :depth="3" style="display: flex; align-items: center; gap: 12px">
                <n-tag v-if="devMode" type="warning">DEV MODE</n-tag>
                <n-tag v-else type="info">COMMIT</n-tag>
                <n-code :code="devMode ? 'N/A' : commitId" language="bash" />
              </n-p>
            </div>
          </div>
        </div>
        <p class="project-description">
          {{ t("aboutView.description") }}
        </p>

        <n-collapse class="license-collapse">
          <n-collapse-item
            title="License"
            name="license"
          >
            <template #header>
              <n-space>
                <n-p>License</n-p>
                <n-tag
                  type="info"
                  round
                  size="small"
                >
                  GPL
                </n-tag>
              </n-space>
            </template>
            <vue-markdown
              :source="aboutPageLicense"
              class="license-text"
            />
          </n-collapse-item>
        </n-collapse>
      </n-card>
    </section>

    <!-- Data Sources Section -->
    <section
      id="data-sources"
      class="section data-sources"
    >
      <n-card>
        <template #header>
          {{ t("aboutView.sections.dataSource") }}
        </template>

        <n-list>
          <n-list-item
            v-for="provider in dataProviders"
            :key="provider.id"
          >
            <template #default>
              <n-space>
                <n-p>{{ provider.name }}</n-p>
                <n-tag
                  v-if="provider.license"
                  type="info"
                  round
                  size="small"
                >
                  {{ provider.license }}
                </n-tag>
              </n-space>
            </template>
            <template #suffix>
              <a
                :href="provider.url"
                class="external-link"
              >
                <n-icon
                  :size="sideIconSize"
                  :color="theme.textColor1"
                >
                  <Link />
                </n-icon>
              </a>
            </template>
          </n-list-item>
        </n-list>

        <template #footer>
          <vue-markdown
            :source="t('aboutView.mapInaccuracyDeclaration')"
            class="markdown-resource"
          />
        </template>
      </n-card>
    </section>

    <!-- Credits Section -->
    <section
      id="credits"
      class="section credits-section"
    >
      <n-card hoverable>
        <template #header>
          {{ t("aboutView.sections.credits") }}
        </template>

        <n-p>{{ t("aboutView.creditIntro") }}</n-p>

        <n-collapse
          accordion
          class="credits-list"
          :trigger-areas="['arrow', 'main']"
        >
          <n-collapse-item
            v-for="credit in credits.sort((a, b) =>
              a.name.localeCompare(b.name)
            )"
            :key="credit.id"
            :title="credit.name"
            :name="credit.id"
          >
            <template #header>
              <n-space>
                {{ credit.name }}
                <n-space v-if="credit.licenseType.trim()">
                  <n-tag
                    v-for="type in credit.licenseType.trim().split(',').map((type) => type.trim())"
                    :key="type"
                    round
                    type="info"
                    size="small"
                  >
                    {{ type }}
                  </n-tag>
                </n-space>
              </n-space>
            </template>

            <div class="credit-content">
              <p>{{ credit.description }}</p>

              <n-divider v-if="credit.license.trim()" />

              <div v-if="credit.license">
                <n-p><strong>License:</strong></n-p>
                <div class="license-text">
                  <pre>{{ processLicenseText(credit.license) }}</pre>
                </div>
              </div>
            </div>

            <template #header-extra>
              <div class="credit-links">
                <a
                  v-if="credit.homepage"
                  :href="credit.homepage"
                >
                  <n-icon
                    :size="sideIconSize"
                    :color="theme.textColor1"
                  >
                    <Link />
                  </n-icon>
                </a>
                <a
                  v-if="credit.url"
                  :href="credit.url"
                >
                  <n-icon
                    :size="sideIconSize"
                    :color="theme.textColor1"
                  >
                    <brand-github v-if="credit.url.includes('github')" />
                    <file-text v-else />
                  </n-icon>
                </a>
              </div>
            </template>
          </n-collapse-item>
        </n-collapse>
      </n-card>
    </section>
  </div>
</template>

<style scoped>
.about-view {
  display: flex;
  flex-direction: column;
  max-width: 1200px;

  gap: 1rem;
  margin: 0 8px;
  padding-right: 8px;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
}

.section {
  width: 100%;
  margin: 0px;
}

.project-header {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 1rem;
}

.project-description {
  margin: 1rem 0;
  line-height: 1.6;
}

.license-collapse {
  margin-top: 1rem;
}

.commit-info:deep(.n-p) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.credits-list {
  margin-top: 1rem;
}

.credit-content {
  padding: 0.5rem;
}

.license-text {
  font-size: 12px;
  font-family: monospace !important;
  background: rgba(128, 128, 128, 0.05);
  padding: 0px 12px;
  border-radius: 4px;
  max-height: 50vh;
  overflow: auto;
}

.license-text:deep(pre) {
  white-space: pre-wrap;
}

.credit-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.credit-links:deep(a) {
  display: block;
  width: v-bind('`${sideIconSize}px`');
  height: v-bind('`${sideIconSize}px`');
}

.external-link {
  color: inherit;
  text-decoration: none;
  display: block;
  height: v-bind('`${sideIconSize}px`');
}

@media (min-width: 700px) {
  .about-view {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 200px;
    grid-template-areas:
      "project anchor"
      "data anchor"
      "credits anchor";
  }

  .page-anchor {
    grid-area: anchor;
    position: sticky;
    top: 1rem;
    align-self: start;
    padding-left: 1rem;
  }

  .project-section {
    grid-area: project;
  }

  .data-sources {
    grid-area: data;
  }

  .credits-section {
    grid-area: credits;
  }
}
</style>
