import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useProjectStore = defineStore('projects', () => {
    const projects = ref([
      //  Web App
      {
        img: 'Portfolio-V2/Projects/ngoc-son-portfolio-with-vuejs.jpg',
        title: 'Ngoc Son Portfolio v2.0',
        desc: 'A modern, responsive portfolio website showcasing full-stack development projects. ' +
          'Built with Vue.js 3 and featuring dynamic project filtering, interactive status badge and clean UI design. ' +
          'The portfolio demonstrates expertise in both frontend (Vue ecosystem) and backend (Node.js, Express, MongoDB) technologies, ' +
          'with projects ranging from social media platforms to real estate landing pages.',
        techStack: ['VueJS', 'VueRouter', 'Pinia', 'NodeJS', 'ExpressJS', 'Dashboard Admin', 'Cloudinary'],
        github: '#!',
        liveDemo: '#!',
        type: 'webapp',
        status: 'in-development',
      },

      {
        img: 'Portfolio-V2/Projects/dream-diary-blog.jpg',
        title: 'Dream Diary Blogs',
        desc: 'Dream Diary Blogs is personal blog website Admin can create blog on any topic from life. Dream Diary Blogs is personal blog website Admin can create blog on any topic from life.',
        techStack: ['VueJS', 'Vuex', 'VueRouter', ' Firebase'],
        github: 'https://github.com/PhamNgocSonTech/DreamDiaryBlog/',
        liveDemo: 'https://vueblog-f7532.web.app/',
        type: 'webapp',
        status: 'completed',

      },

      {
        img: 'Portfolio-V2/Projects/chit-chat.jpg',
        title: 'Chit Chat',
        desc: 'Chit Chat is a group chat website. Create chat room and can invite friends to join it.',
        techStack: ['VueJS', 'NodeJS', 'ExpressJS', 'Socket.io', 'MongoDB', 'JWT'],
        github: 'https://github.com/PhamNgocSonTech/ChitChat/',
        liveDemo: 'https://chit-chat-bay.vercel.app/',
        type: 'webapp',
        status: 'completed',
      },

      {
        img: 'Portfolio-V2/Projects/onstagrams-resize.jpg',
        title: 'Onstagrams (Team Project)',
        desc: 'Onstagrams is social app a place that connects everyone. All users can puslish status and interact it.',
        techStack: ['NodeJS', 'ExpressJS', 'MongoDB', 'ReactJS', 'Redux', 'Cloudinary', 'Nodemailer'],
        github: 'https://github.com/PhamNgocSonTech/Onstagrams/',
        liveDemo: 'https://onstagrams.vercel.app/',
        type: 'webapp',
        status: 'completed',
      },

      {
        img: 'Portfolio-V2/Projects/flip-card-poke.jpg',
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
        img: 'Portfolio-V2/Projects/portfolio-template.jpg',
        title: 'Personal Portfolio',
        desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
        techStack: ['HTML', 'CSS', 'Fully Responsive'],
        github: 'https://github.com/PhamNgocSonTech/portfolio_template/',
        liveDemo: 'https://phamngocsontech.github.io/portfolio_template/',
        type: 'landing',
        status: 'new',
      },

      {
        img: 'Portfolio-V2/Projects/real-estate.jpg',
        title: 'Real Estate',
        desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
        techStack: ['HTML', 'CSS', 'Fully Responsive'],
        github: 'https://phamngocsontech.github.io/Real-Estate-Landing-Page/',
        liveDemo: 'https://github.com/PhamNgocSonTech/Real-Estate-Landing-Page',
        type: 'landing',
        status: 'completed',
      },

      {
        img: 'Portfolio-V2/Projects/lesson-landing-page.jpg',
        title: 'Lesson Page',
        desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
        techStack: ['HTML', 'CSS', 'Fully Responsive'],
        github: 'https://github.com/PhamNgocSonTech/Lesson-Landing-Page',
        liveDemo: 'https://phamngocsontech.github.io/Lesson-Landing-Page/',
        type: 'landing',
        status: 'completed',
      },

      {
        img: 'Portfolio-V2/Projects/eLearning-landing-page.jpg',
        title: 'eLearning',
        desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
        techStack: ['HTML', 'CSS', 'Fully Responsive'],
        github: 'https://github.com/PhamNgocSonTech/eLearning-Landing-Page/',
        liveDemo: 'https://phamngocsontech.github.io/eLearning-Landing-Page/',
        type: 'landing',
        status: 'completed',
      },

      {
        img: 'Portfolio-V2/Projects/ecommerce.jpg',
        title: 'Grocery Ecommerce',
        desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
        techStack: ['HTML', 'CSS', 'SCSS', 'Fully Customizable', '60+ Screens', 'Light & Dark Mode ', 'Multi-Platform', 'Free Google Font'],
        github: '#!',
        liveDemo: '#!',
        type: 'landing',
        status: 'coming-soon',
      },

      {
        img: 'Portfolio-V2/Projects/pet-shop-landing-page.jpg',
        title: 'Lucy Pet Shop',
        desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
        techStack: ['HTML', 'CSS', 'Fully Responsive'],
        github: '#!',
        liveDemo: '#!',
        type: 'landing',
        status: 'coming-soon',
      },

      {
        img: 'Portfolio-V2/Projects/banking-landing-page.jpg',
        title: 'Banking Website',
        desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
        techStack: ['HTML', 'CSS', 'Fully Responsive'],
        github: '#!',
        liveDemo: '#!',
        type: 'landing',
        status: 'coming-soon',
      },

      {
        img: 'Portfolio-V2/Projects/podcast-landing-page.jpg',
        title: 'Podcast Website',
        desc: 'A responsive landing page built from a Figma design using HTML and CSS. Focused on clean code, pixel-perfect implementation, and cross-device compatibility.',
        techStack: ['HTML', 'CSS', 'Fully Responsive'],
        github: '#!',
        liveDemo: '#!',
        type: 'landing',
        status: 'coming-soon',
      },
    ])
    const loading = ref(false)
    const error = ref(null)

//   GETTERS

  const getProjects = computed(() => projects.value)

  const getProjectsByType = computed(() => {
    return (type) => {
      if(type === 'all') return projects.value
      return projects.value.filter(project => project.type === type)
    }
  })

  // const getProjectById = computed(() => {
  //   return (id) => projects.value.find(project => project.id === id)
  // })

  const projectCount = computed(() => {
    return (type) => {
      return getProjectsByType.value(type).length
    }
  })
return {
  //State
  projects,
  loading,
  error,

  // Getters
  getProjects,
  getProjectsByType,
  projectCount,
}
})


