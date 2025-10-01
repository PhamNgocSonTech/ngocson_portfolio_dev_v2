<script setup>
import { computed, ref, watch } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { useRoute } from 'vue-router'
import router from '@/router/index.js'
import {useProjectStore} from '@/stores/projectStore.js'
const route = useRoute()
const projectStore = useProjectStore()

// State
const filter = ref('all')

watch(
  () => route.query.type, (newType) => {
    if(['landing', 'webapp'].includes(newType)) {
      filter.value = newType
    }else {
      filter.value = 'all'
    }
  },
  {immediate: true}
)

// Update Filter & URL
const setFilter = (newValue) => {
  filter.value = newValue
  router.push({
    name: 'projects',
    query: newValue === 'all' ? {} : {type: newValue}
  })
}


// Filter Button

const filteredProjects = computed(() => {
  return projectStore.getProjectsByType(filter.value)
})

const currentHeading = computed(() => {
  const countProject = projectStore.projectCount(filter.value)
  if(countProject === 0) return 'Coming Soon...😓'
  const heading  = {
    all: `All Projects (${countProject})`,
    landing: `Landing Pages (${countProject})`,
    webapp: `Web Apps (${countProject})`
  }
  return heading[filter.value] || 'Coming Soon...😓'
})


</script>

<template>
  <div class="container">
    <!-- Filter Button -->
    <div class="project__filter">
      <button
        :class="{ active: filter === 'all' }"
        @click="setFilter('all')"
        class="btn filter-btn">
        All
      </button>

      <button
        :class="{ active: filter === 'webapp' }"
        @click="setFilter('webapp')"
        class="btn filter-btn"
      >
        Web Apps
      </button>

      <button
        :class="{ active: filter === 'landing' }"
        @click="setFilter('landing')"
        class="btn filter-btn"
      >
        Landing Pages
      </button>
    </div>
    <div class="project">
      <h2 class="project__heading heading">{{ currentHeading }}</h2>
      <div class="project__card">
        <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1">
          <div class="col" v-for="project in filteredProjects" :key="project.id">
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/project.css';
</style>
