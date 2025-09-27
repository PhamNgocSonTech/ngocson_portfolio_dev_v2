<script setup>
import { ref } from 'vue'

const techStack = ref([
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

const duplicatedTech = ref([...techStack.value, ...techStack.value])
</script>

<template>
  <section class="techs">
    <div class="main__container">
      <div class="tech__inner">
        <div class="tech__content">
          <div class="tech__line"></div>
          <h2 class="tech__title">What I Build With</h2>
        </div>
        <div class="tech__list wow animate__bounceInRight">
          <!--  Tech Item With Carousel-->
          <div class="tech__carousel">
            <div class="tech__track">
              <div
                v-for="tech in duplicatedTech"
                :key="`${tech.id}-${Math.random()}`"
                class="tech__item">
                <img :src="tech.icon" class="tech-item__logo" :alt="tech.name" />
                <p class="tech-item__name">{{ tech.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =============================tech============================= */
.tech__item {
  text-align: center;
}

/* CSS Carousel */
.tech__list {
  margin-top: 60px;
  overflow: hidden;
  padding: 20px 0;
  /* Fade effect ở 2 bên */
  mask-image: linear-gradient(
    90deg,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}

.tech__carousel {
  width: 100%;
}

.tech__track {
  display: flex;
  gap: 40px;
  animation: scroll 60s linear infinite;
  width: fit-content;
  padding: 10px 0;
}

/* Pause khi hover */
.tech__track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.tech__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  min-width: 120px;
  flex-shrink: 0;
}

.tech-item__logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.tech-item__logo:hover {
  transform: scale(1) translateY(-10px);
}

.tech-item__name {
  color: #525771;
  font-weight: bold;
  white-space: nowrap;
  margin: 0;
}

.techs {
  margin-top: 98px;
}

.tech__content {
  text-align: center;
  margin: 0 auto;
}

.tech__line {
  width: 86px;
  height: 0;
  border: 1px solid var(--primary-color);
  margin: 0 auto;
}

.tech__title {
  max-width: 255px;
  margin: 0 auto;
  gap: 13px;
  color: var(--heading-color);
  font-size: 4.2rem;
  font-weight: 500;
  line-height: 1.19; /* 119.048% */
  letter-spacing: -1.68px;
}

/*
 .tech__title::before {
  content: "";
  width: 86px;
  height: 2px;
  margin-top: 22px;
  background-color: var(--primary-color);
}
*/

.tech__group {
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: flex-start; /* căn trái trong cột — giống mockup */
}

/*
.tech__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px 48px;
  align-items: center;
  margin-left: 105px;
  margin-top: 20px;
}
*/


.tech__item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.tech__item:first-child {
  margin-bottom: 34px;
}

/* .tech-item__logo { */
/* width: 26px;
  height: 26px; */
/* border-radius: 50%; */
/* object-fit: contain; */
/* } */

.tech-item__logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Tablet & Mobile */
@media screen and (max-width: 991px) {
  .techs {
    margin-top: 200px;
  }

  .tech__inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .tech__list {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px 40px;
    margin-left: auto;
    margin-top: 40px;
  }

  .tech__item {
    justify-content: center;
  }
}

/* Large Tablet (iPad Pro, Surface, etc.) */
@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .tech__list {
    margin-left: 40px;
  }
}

/* Mobile */
@media screen and (max-width: 767px) {
  /* tech */
  .tech__title {
    margin-bottom: 30px;
  }

  .tech__list {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 0 auto;
  }

  .tech__item {
    gap: 12px;
  }

  .tech__group:nth-child(n + 3) {
    margin-top: 36px;
  }
}

/* Extra Small Mobile */
@media (max-width: 575px) {
  .techs {
    margin-top: 150px;
  }
}
</style>
