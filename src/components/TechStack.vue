<script setup>
import { ref } from 'vue'

const techStack = ref([
  {
    id: 'html',
    name: 'HTML',
    icon: 'https://img.icons8.com/color/48/html-5--v1.png',
  },

  {
    id: 'css',
    name: 'CSS',
    icon: 'https://img.icons8.com/color/48/css3.png',
  },

  {
    id: 'scss',
    name: 'SCSS/SASS',
    icon: 'https://img.icons8.com/color/48/sass.png',
  },

  {
    id: 'js',
    name: 'Javascript',
    icon: 'https://img.icons8.com/color/48/javascript--v1.png',
  },

  {
    id: 'node',
    name: 'NodeJS',
    icon: 'https://img.icons8.com/color/48/nodejs.png',
  },

  {
    id: 'ex',
    name: 'ExpressJS',
    icon: 'https://img.icons8.com/color/48/express-js.png',
  },

  {
    id: 'mongo',
    name: 'MongoDB',
    icon: 'https://img.icons8.com/color/48/mongodb.png',
  },

  {
    id: 'mysql',
    name: 'MySQL',
    icon: 'https://img.icons8.com/color/48/mysql-logo.png',
  },

  {
    id: 'jwt',
    name: 'JWT',
    icon: 'https://img.icons8.com/color/48/java-web-token.png',
  },

  {
    id: 'postman',
    name: 'Postman',
    icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png',
  },

  {
    id: 'gpt',
    name: 'Chat GPT',
    icon: 'https://img.icons8.com/pulsar-line/48/chatgpt.png',
  },

  {
    id: 'github',
    name: 'Github',
    icon: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-github-social-media-tanah-basah-glyph-tanah-basah.png',
  },

  {
    id: 'git-copilot',
    name: 'Github Copilot',
    icon: 'https://img.icons8.com/fluency/48/github-copilot.png',
  },
])

const duplicatedTech = ref([...techStack.value, ...techStack.value])
</script>

<template>
  <section class="clients">
    <div class="main__container">
      <div class="client__inner">
        <div class="client__content">
          <div class="client__line"></div>
          <h2 class="client__title">What I Build With</h2>
        </div>
        <div class="client__list wow animate__bounceInRight">
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
/* =============================CLIENT============================= */
.tech__item {
  text-align: center;
}


/* CSS Carousel */

.client__list {
  margin-top: 60px;
  overflow: hidden;
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
  animation: scroll 25s linear infinite;
  width: fit-content;
}

/* Pause khi hover */
.client__list:hover .tech__track {
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


.clients {
  margin-top: 98px;
}

.client__content {
  text-align: center;
  margin: 0 auto;
}

.client__line {
  width: 86px;
  height: 0;
  border: 1px solid var(--primary-color);
  margin: 0 auto;
}

.client__title {
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
 .client__title::before {
  content: "";
  width: 86px;
  height: 2px;
  margin-top: 22px;
  background-color: var(--primary-color);
}
*/

.client__group {
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: flex-start; /* căn trái trong cột — giống mockup */
}

.client__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px 48px;
  align-items: center;
  margin-left: 105px;
  margin-top: 20px;
}

.client__item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.client__item:first-child {
  margin-bottom: 34px;
}

/* .client-item__logo { */
/* width: 26px;
  height: 26px; */
/* border-radius: 50%; */
/* object-fit: contain; */
/* } */

.client-item__logo-wrapper {
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
  .clients {
    margin-top: 200px;
  }

  .client__inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .client__list {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px 40px;
    margin-left: auto;
    margin-top: 40px;
  }

  .client__item {
    justify-content: center;
  }
}

/* Large Tablet (iPad Pro, Surface, etc.) */
@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .client__list {
    margin-left: 40px;
  }
}

/* Mobile */
@media screen and (max-width: 767px) {
  /* Client */
  .client__title {
    margin-bottom: 30px;
  }

  .client__list {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 0 auto;
  }

  .client__item {
    gap: 12px;
  }

  .client__group:nth-child(n + 3) {
    margin-top: 36px;
  }
}

/* Extra Small Mobile */
@media (max-width: 575px) {
  .clients {
    margin-top: 150px;
  }
}
</style>
