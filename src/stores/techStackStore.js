import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTechStackStore = defineStore('techStacks',() => {
  const techs = ref([
    {
      id: 'html',
      name: 'HTML',
      icon: 'https://cdn.simpleicons.org/html5',
    },

    {
      id: 'css',
      name: 'CSS',
      icon: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg',
    },

    {
      id: 'scss',
      name: 'SCSS/SASS',
      icon: 'https://cdn.simpleicons.org/sass',
    },

    {
      id: 'js',
      name: 'Javascript',
      icon: 'https://cdn.simpleicons.org/javascript',
    },

    {
      id: 'vue',
      name: 'VueJS',
      icon: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg',
    },

    {
      id: 'vite',
      name: 'Vite',
      icon: 'https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg',
    },

    {
      id: 'vue-dev-tool',
      name: 'Vue Dev Tool',
      icon: 'https://devtools.vuejs.org/logo-mini.svg',
    },

    {
      id: 'node',
      name: 'NodeJS',
      icon: 'https://cdn.simpleicons.org/nodedotjs',
    },

    {
      id: 'npm',
      name: 'NPM',
      icon: 'https://cdn.simpleicons.org/npm',
    },

    {
      id: 'ex',
      name: 'ExpressJS',
      icon: 'https://cdn.simpleicons.org/express',
    },

    {
      id: 'mongo',
      name: 'MongoDB',
      icon: 'https://cdn.simpleicons.org/mongodb',
    },

    {
      id: 'mysql',
      name: 'MySQL',
      icon: 'https://www.vectorlogo.zone/logos/mysql/mysql-official.svg',
    },

    {
      id: 'jwt',
      name: 'JWT',
      icon: 'https://www.jwt.io/img/pic_logo.svg',
    },

    {
      id: 'postman',
      name: 'Postman',
      icon: 'https://cdn.simpleicons.org/postman',
    },

    {
      id: 'cloudinary',
      name: 'Cloudinary',
      icon: 'https://cdn.simpleicons.org/cloudinary',
    },

    {
      id: 'gpt',
      name: 'Chat GPT',
      icon: 'https://cdn.simpleicons.org/openai/080808',
    },

    {
      id: 'github',
      name: 'Github',
      icon: 'https://cdn.simpleicons.org/github',
    },

    {
      id: 'gitlab',
      name: 'Gitlab',
      icon: 'https://cdn.simpleicons.org/gitlab',
    },

    {
      id: 'git-copilot',
      name: 'Github Copilot',
      icon: 'https://cdn.simpleicons.org/githubcopilot',
    },

    {
      id: 'git-page',
      name: 'Github Pages',
      icon: 'https://cdn.simpleicons.org/githubpages',
    },

    {
      id: 'vercel',
      name: 'Vercel',
      icon: 'https://cdn.simpleicons.org/vercel',
    },

    {
      id: 'render',
      name: 'Render',
      icon: 'https://cdn.simpleicons.org/render',
    },

    {
      id: 'netlify',
      name: 'Netlify',
      icon: 'https://cdn.simpleicons.org/netlify',
    },

    {
      id: 'odoo',
      name: 'Odoo ERP',
      icon: 'https://cdn.simpleicons.org/odoo',
    },
  ])
  const loading = ref(false)
  const error = ref(null)

//   GETTERS

  const getTechs = computed(() => techs.value)

  const getTechById = (id) => {
    return techs.value.find(tech =>  tech.id === id)
  }

  return {
    techs,
    loading,
    error,
    getTechs,
    getTechById,
  }
})
