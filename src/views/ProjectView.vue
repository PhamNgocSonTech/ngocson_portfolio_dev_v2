<script setup>
import { computed, ref, watch } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
// Import Imgs
import RealEstateImg from '@/assets/img/projects/new-real-estate.png'
import LessonPageImg from '@/assets/img/projects/new-lesson-landing-page.png'
import eLearningImg from '@/assets/img/projects/new-eLearning-landing-page.png'
import PortfolioImg from '@/assets/img/projects/portfolio-template.png'
import DreamBlogImg from '@/assets/img/projects/new-dream-diary-blog.png'
import ChitChatImg from '@/assets/img/projects/chit-chat.png'
import OnstagramsImg from '@/assets/img/projects/onstagrams-resize.png'
import PokeGameImg from '@/assets/img/projects/flip-card-poke.png'
import PortfolioV2Img from '@/assets/img/projects/portfolio-with-vuejs.png'
import PetsShopImg from '@/assets/img/projects/pet-shop-landing-page.jpg'
import BankingImg from '@/assets/img/projects/banking-landing-page.jpg'
import { useRoute } from 'vue-router'
import router from '@/router/index.js'
const filter = ref('all')
const route = useRoute()

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

const projects = [
  //  Web App
  {
    img: PortfolioV2Img,
    title: 'Ngoc Son Portfolio V2',
    desc: 'A modern, responsive portfolio website showcasing full-stack development projects. ' +
      'Built with Vue.js 3 and featuring dynamic project filtering, interactive status badge and clean UI design. ' +
      'The portfolio demonstrates expertise in both frontend (Vue ecosystem) and backend (Node.js, Express, MongoDB) technologies, ' +
      'with projects ranging from social media platforms to real estate landing pages.',
    techStack: ['VueJS', 'VueRouter', 'Pinia', 'Cloudinary'],
    github: '#!',
    liveDemo: '#!',
    type: 'webapp',
    status: 'in-development',
  },

  {
    img: DreamBlogImg,
    title: 'Dream Diary Blogs',
    desc: 'Dream Diary Blogs is personal blog website Admin can create blog on any topic from life. Dream Diary Blogs is personal blog website Admin can create blog on any topic from life.',
    techStack: ['VueJS', 'Vuex', 'VueRouter', ' Firebase'],
    github: 'https://github.com/PhamNgocSonTech/DreamDiaryBlog/',
    liveDemo: 'https://vueblog-f7532.web.app/',
    type: 'webapp',
    status: 'completed',

  },

  {
    img: ChitChatImg,
    title: 'Chit Chat',
    desc: 'Chit Chat is a group chat website. Create chat room and can invite friends to join it.',
    techStack: ['VueJS', 'NodeJS', 'ExpressJS', 'Socket.io', 'MongoDB', 'JWT'],
    github: 'https://github.com/PhamNgocSonTech/ChitChat/',
    liveDemo: 'https://chit-chat-bay.vercel.app/',
    type: 'webapp',
    status: 'completed',
  },

  {
    img: OnstagramsImg,
    title: 'Onstagrams (Team Project)',
    desc: 'Onstagrams is social app a place that connects everyone. All users can puslish status and interact it.',
    techStack: ['NodeJS', 'ExpressJS', 'MongoDB', 'ReactJS', 'Redux', 'Cloudinary', 'Nodemailer'],
    github: 'https://github.com/PhamNgocSonTech/Onstagrams/',
    liveDemo: 'https://onstagrams.vercel.app/',
    type: 'webapp',
    status: 'completed',
  },

  {
    img: PokeGameImg,
    title: 'Pokemon Flip Card (Web Game)',
    desc: 'Pokemon Flip Card is a simple game with two identical cards that will be score. There are different difficulty modes 4x4 6x6 8x8 10x10 which will have different number of cards displayed..',
    techStack: ['VueJS'],
    github: 'https://github.com/PhamNgocSonTech/PokemonFlipCardNewVersion/',
    liveDemo: 'https://flip-card-poke.netlify.app/',
    type: 'webapp',
    status: 'completed',
  },

  // Landing Page
  {
    img: PortfolioImg,
    title: 'Personal Portfolio',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: 'https://github.com/PhamNgocSonTech/portfolio_template/',
    liveDemo: 'https://phamngocsontech.github.io/portfolio_template/',
    type: 'landing',
    status: 'new',
  },

  {
    img: RealEstateImg,
    title: 'Real Estate',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: 'https://phamngocsontech.github.io/Real-Estate-Landing-Page/',
    liveDemo: 'https://github.com/PhamNgocSonTech/Real-Estate-Landing-Page',
    type: 'landing',
    status: 'completed',
  },

  {
    img: LessonPageImg,
    title: 'Lesson Page',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: 'https://github.com/PhamNgocSonTech/Lesson-Landing-Page',
    liveDemo: 'https://phamngocsontech.github.io/Lesson-Landing-Page/',
    type: 'landing',
    status: 'completed',
  },

  {
    img: eLearningImg,
    title: 'eLearning',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: 'https://github.com/PhamNgocSonTech/eLearning-Landing-Page/',
    liveDemo: 'https://phamngocsontech.github.io/eLearning-Landing-Page/',
    type: 'landing',
    status: 'completed',
  },


  {
    img: PetsShopImg,
    title: 'Lucy Pet Shop',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: '#!',
    liveDemo: '#!',
    type: 'landing',
    status: 'coming-soon',
  },

  {
    img: BankingImg,
    title: 'Banking Website',
    desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
    techStack: ['HTML', 'CSS', 'Fully Responsive'],
    github: 'https://github.com/PhamNgocSonTech/portfolio_template/',
    liveDemo: 'https://phamngocsontech.github.io/portfolio_template/',
    type: 'landing',
    status: 'coming-soon',
  },
]

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
      return 'Coming Soon...😓'
  }
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
        :class="{ active: filter === 'landing' }"
        @click="setFilter('landing')"
        class="btn filter-btn"
      >
        Landing Pages
      </button>

      <button
        :class="{ active: filter === 'webapp' }"
        @click="setFilter('webapp')"
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
