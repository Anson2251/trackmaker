<script setup>
import { NH1, NP, NDivider, NImage, NCard, NCollapse, NCollapseItem, NIcon, NElement, NList, NListItem, NTag, NSpace, NAnchor, NAnchorLink } from "naive-ui";
import { ref, onMounted, onUnmounted } from "vue";

const showAnchor = ref(false);
const handleResize = () => {
  showAnchor.value = window.innerWidth >= 700;
};
onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
import VueMarkdown from 'vue-markdown-render';
import { LogoGithub, Link, DocumentTextOutline } from "@vicons/ionicons5";
import { credits, dataProviders } from "@/configs";

const logo = ref(new URL("/favicon.svg", import.meta.url).href);

import mapDataInaccuracyDeclaration from "@/assets/map-data-inaccuracy-declaration.md?raw";
import aboutPageLicense from "@/assets/about-page-license.md?raw";
</script>

<template>
  <div class="about-view">
    <n-anchor
      v-if="showAnchor"
      class="page-anchor"
      :show-rail="true"
      :show-background="true"
    >
      <n-anchor-link title="Project" href="#project" />
      <n-anchor-link title="Data Sources" href="#data-sources" />
      <n-anchor-link title="Credits" href="#credits" />
    </n-anchor>
    <!-- Project Section -->
    <section id="project" class="section project-section">
      <n-card hoverable>
        <div class="project-header">
          <n-image width="100" :src="logo" preview-disabled />
          <n-h1>Trackmaker</n-h1>
        </div>
        <p class="project-description">
          Enabling route planning and navigation for outdoor activities with map marking feature. 
          Create tracks by tracing real-time motion. The created tracks can be shared with your friends and uploaded to DNE social platform.
        </p>
        
        <n-collapse class="license-collapse">
          <n-collapse-item title="License" name="license">
            <template #header>
              <n-space>
                <n-p>License</n-p>
                <n-tag type="info" round size="small">GPL</n-tag>
              </n-space>
            </template>
            <div class="license-content">
              {{ aboutPageLicense }}
            </div>
          </n-collapse-item>
        </n-collapse>
      </n-card>
    </section>

    <!-- Data Sources Section -->
    <section id="data-sources" class="section data-sources">
      <n-card hoverable>
        <template #header>
          Data Sources
        </template>
        
        <n-list>
          <n-list-item v-for="provider in dataProviders" :key="provider.id">
            <template #default>
              <n-space>
                <n-p>{{ provider.name }}</n-p>
                <n-tag v-if="provider.license" type="info" round size="small">
                  {{ provider.license }}
                </n-tag>
              </n-space>
            </template>
            <template #suffix>
              <a :href="provider.url" class="external-link">
                <n-icon size=24>
                  <Link />
                </n-icon>
              </a>
            </template>
          </n-list-item>
        </n-list>

        <template #footer>
          <VueMarkdown :source="mapDataInaccuracyDeclaration" class="map-data-inaccuracy-md"/>
        </template>
      </n-card>
    </section>

    <!-- Credits Section -->
    <section id="credits" class="section credits-section">
      <n-card hoverable>
        <template #header>
          Credits
        </template>
        
        <n-p>Without the following (open source) projects, Trackmaker could not be built:</n-p>
        
        <n-collapse accordion class="credits-list">
          <n-collapse-item 
            v-for="credit in credits.sort((a, b) => a.name.localeCompare(b.name))"
            :key="credit.id" 
            :title="credit.name"
            :name="credit.id"
          >
            <template #header>
              <n-space>
                {{ credit.name }}
                <n-tag v-if="credit.license" round type="info" size="small">
                  {{ credit.licenseType }}
                </n-tag>
              </n-space>
            </template>
            
            <div class="credit-content">
              <p>{{ credit.description }}</p>
              
              <n-divider v-if="credit.license" />
              
              <div v-if="credit.license" class="license-text">
                <n-p><strong>License:</strong></n-p>
                <n-element tag="pre">{{ credit.license.trim().replace(/\n([\s]*)\n/,
									"\n\n").split("\n\n").map((l) => l.split("\n").map((s) =>
										s.trim()).join("")).join("\n\n") }}</n-element>
              </div>
            </div>
            
            <template #header-extra>
              <div class="credit-links">
                <a v-if="credit.homepage" >
                  <n-icon size=20>
                    <Link />
                  </n-icon>
                </a>
                <a :href="credit.url">
                  <n-icon size=24>
                    <logo-github v-if="credit.url.includes('github')" />
                    <DocumentTextOutline v-else />
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
.map-data-inaccuracy-md:deep(*) {
	white-space: normal;
	display: inline;
}

.about-view {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  gap: 1rem;
  margin: 0 auto;
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

.license-content {
  padding: 0.5rem;
  background: rgba(128, 128, 128, 0.05);
  border-radius: 4px;
  font-family: monospace;
}

.credits-list {
  margin-top: 1rem;
}

.credit-content {
  padding: 0.5rem;
}

.license-text pre {
  white-space: pre-wrap;
  font-family: monospace;
  background: rgba(128, 128, 128, 0.05);
  padding: 1rem;
  border-radius: 4px;
}

.credit-links {
  display: flex;
  gap: 0.5rem;
}

.external-link {
  color: inherit;
  text-decoration: none;
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
    position: relative;
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
