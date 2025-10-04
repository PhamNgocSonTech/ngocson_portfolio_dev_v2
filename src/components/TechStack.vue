<script setup>
import { computed, ref } from 'vue'
import { useTechStackStore } from '@/stores/techStackStore.js'

const techStackStore = useTechStackStore()
const duplicatedTech = computed(() => [
  ...techStackStore.getTechs,
  ...techStackStore.getTechs,
])
</script>

<template>
  <section class="techs">
    <div class="main__container">
      <div class="tech__inner">
        <div class="tech__content">
          <div class="tech__line"></div>
          <h2 class="tech__title">What I Build With</h2>
        </div>
        <div
          v-motion="{
            initial: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 800, ease: 'easeOut' }
            }
          }"
          class="tech__list">
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
