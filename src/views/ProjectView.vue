<script setup>
import { computed, ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
// Import Imgs
import RealEstateImg from '@/assets/img/projects/new-real-estate.png'
import LessonPageImg from '@/assets/img/projects/new-lesson-landing-page.png'
import eLearningImg from '@/assets/img/projects/new-eLearning-landing-page.png'
import PortfolioImg from '@/assets/img/projects/portfolio-template.png'
const filter = ref('all')

const projects = [
  // Landing Page
  {
    img: RealEstateImg,
    title: 'Real Estate',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: 'https://phamngocsontech.github.io/Real-Estate-Landing-Page/',
    liveDemo: 'https://github.com/PhamNgocSonTech/Real-Estate-Landing-Page',
    type: 'landing',
  },

  {
    img: LessonPageImg,
    title: 'Lesson Page',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: 'https://github.com/PhamNgocSonTech/Lesson-Landing-Page',
    liveDemo: 'https://phamngocsontech.github.io/Lesson-Landing-Page/',
    type: 'landing',
  },

  {
    img: eLearningImg,
    title: 'eLearning',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: 'https://github.com/PhamNgocSonTech/eLearning-Landing-Page/',
    liveDemo: 'https://phamngocsontech.github.io/eLearning-Landing-Page/',
    type: 'landing',
  },

  {
    img: PortfolioImg,
    title: 'Personal Portfolio',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: 'https://github.com/PhamNgocSonTech/portfolio_template/',
    liveDemo: 'https://phamngocsontech.github.io/portfolio_template/',
    type: 'landing',
  },
]

const filteredProjects = computed(() => {
  if (filter.value === 'all') return projects
  return projects.filter((p) => p.type === filter.value)
})

const currentHeading = computed(() => {
  const countProject = filteredProjects.value.length
  if (countProject === 0) return 'Coming Soon...😓'
  switch (filter.value) {
    case 'all':
      return `All Projects (${countProject})`
    case 'landing':
      return `Landing Pages (${countProject})`
    case 'webapp':
      return `Web Apps (${countProject})`
    default:
      return "Coming Soon...😓"
  }
})
</script>

<template>
  <div class="container">
    <!-- Filter Button -->
    <div class="project__filter">
      <button :class="{ active: filter === 'all' }" @click="filter = 'all'" class="btn filter-btn">
        All
      </button>

      <button
        :class="{ active: filter === 'landing' }"
        @click="filter = 'landing'"
        class="btn filter-btn"
      >
        Landing Pages
      </button>

      <button
        :class="{ active: filter === 'webapp' }"
        @click="filter = 'webapp'"
        class="btn filter-btn"
      >
        Web Apps
      </button>
    </div>
    <div class="project">
      <h2 class="project__heading heading">{{ currentHeading }}</h2>
      <div class="project__card">
        <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1">
          <div class="col" v-for="project in filteredProjects" :key="project.title">
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
