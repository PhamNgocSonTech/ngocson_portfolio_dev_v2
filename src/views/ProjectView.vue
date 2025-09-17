<script setup>
import { computed, ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
const filter = ref('all')

const projects = [
  // Landing Page
  {
    img: '../assets/img/projects/new-real-estate.png',
    title: 'Real Estate',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: 'https://phamngocsontech.github.io/Real-Estate-Landing-Page/',
    liveDemo: 'https://github.com/PhamNgocSonTech/Real-Estate-Landing-Page',
    type: 'landing'
  },

  {
    img: '../assets/img/projects/new-lesson-landing-page.png',
    title: 'Lesson Page',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: 'https://github.com/PhamNgocSonTech/Lesson-Landing-Page',
    liveDemo: 'https://phamngocsontech.github.io/Lesson-Landing-Page/',
    type: 'landing'
  },

  {
    img: '../assets/img/projects/new-eLearning-landing-page.png',
    title: 'eLearning',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: 'https://github.com/PhamNgocSonTech/eLearning-Landing-Page/',
    liveDemo: 'https://phamngocsontech.github.io/eLearning-Landing-Page/',
    type: 'landing'
  },

  {
    img: '../assets/img/projects/portfolio-template.png',
    title: 'Personal Portfolio',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: 'https://github.com/PhamNgocSonTech/portfolio_template/',
    liveDemo: 'https://phamngocsontech.github.io/portfolio_template/',
    type: 'landing'
  },
]


const filteredProjects = computed(() => {
  if(filter.value === 'all') return projects
  return projects.filter(p => p.type === filter.value)
})

</script>

<template>
  <div class="container">
    <!-- Filter Button -->
    <div class="project__filter">
      <button
        :class="{ active: filter.value === 'all' }"
        @click="filter.value = 'all'"
        class="btn filter-btn"
      >
        All
      </button>

      <button
        :class="{ active: filter.value === 'landing' }"
        @click="filter.value = 'landing'"
        class="btn filter-btn"
      >
        Landing Pages
      </button>

      <button
        :class="{ active: filter.value === 'webapp' }"
        @click="filter.value = 'webapp'"
        class="btn filter-btn"
      >
        Web Apps
      </button>
    </div>
    <!--    Project Cards-->
    <ProjectCard v-for="project in filteredProjects" :key="project.title" :project="project" />
  </div>
</template>

<style scoped>
@import '@/assets/css/project.css';
</style>
