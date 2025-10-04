<script setup>
// import 'animate.css';
import { useImageKit } from '@/composables/useImageKit.js'
import {Github, Facebook, Instagram} from 'lucide-vue-next'
const { getImageUrl } = useImageKit()
</script>

<template>
  <!-- Hero -->
  <section class="hero">
    <div class="main__container">
      <div class="hero__inner">
        <div class="hero__image-wrap">
          <!-- <img src="./assets/img/hero-img.png" alt="" class="hero__portrait"> -->
          <img
            v-motion="{
              initial: { opacity: 0, x: 100, scale: 0.9 },
              visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 1000,
                  ease: [0.22, 1, 0.36, 1], // Smooth
                  delay: 200 // Sau text
                }
              }
            }"
            :src="getImageUrl('Portfolio-V2/HomePage/ngocson.jpg')"
            alt="Hero Image"
            class="hero__portrait"
            loading="lazy"
            @contextmenu.prevent
          />
          <!-- Decorators -->
          <!-- <img src="./assets/img/decor-01.svg" alt="" class="hero__decor-first"> -->
          <!-- <img src="./assets/img/decor-02.svg" alt="" class="hero__decor-second"> -->
          <!-- <img src="./assets/img/decor-01.svg" alt="" class="hero__decor-center show-on-mobile"> -->
        </div>
        <div v-motion-slide-visible-left class="hero__content">
          <span class="hero__title"
            >Hey, I'm Ngoc Son
            <img
              v-motion="{
                initial: { rotate: 0 },
                visible: {
                  rotate: [0, 14, -8, 14, -4, 10, 0],
                  transition: {
                    duration: 2500,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1000 // Delay 1s
                  }
                }
              }"
              class="hero__title-icon"
              src="../assets/icons/about-me-icon/about-me-icon.svg"
              alt=""
            />
          </span>
          <h1
            v-motion="{
              initial: { opacity: 0, scale: 0.8 },
              enter: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 800,
                  ease: [0.68, -0.6, 0.32, 1.6],
                  delay: 200
                }
              }
            }"
            class="hero__heading heading">
            <strong class="hero__heading-name">Front</strong>end Developer
          </h1>
          <p class="hero__desc">
            I'm a <strong class="hero__desc-name">Front-end Developer</strong>. Focused on
            performance, accessibility, and clean code.
          </p>
          <div class="hero__row">
            <a
              v-motion="{
              initial: {
                scale: 1,
                backgroundColor: '#4f46e5',
                color: '#fff',
                boxShadow: '0 0 0 rgba(99, 102, 241, 0)'
              },
              hovered: {
                scale: 1.05,
                backgroundColor: '#6366f1',
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
                transition: { duration: 300, ease: 'easeOut' }
              }
            }"
              href="mailto:phamngocson7a1@gmail.com"
              class="hero__cta-btn btn"
              >Contact Me</a
            >
            <a href="#projects" class="hero__cta-link">My Projects</a>
          </div>
          <div class="hero__social">
            <p class="hero__social-title">Follow me on:</p>
            <div class="hero__social-icons">
              <a
                href="https://github.com/PhamNgocSonTech"
                class="hero__social-icon"
                target="_blank"
              >
              <Github/>
              </a>

              <a
                href="https://www.facebook.com/PhamNgocSonBB/"
                class="hero__social-icon"
                target="_blank"
              >
              <Facebook/>
              </a>

              <a
                href="https://www.instagram.com/genjikaze/"
                class="hero__social-icon"
                target="_blank"
              >
              <Instagram/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero -->
</template>

<style scoped>
/* =============================HERO============================= */
.hero {
  padding: 24px 0 0;
  background: var(--background-color);
}
.hero__row {
  display: flex;
  align-items: center;
}

.hero__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero__image-wrap {
  position: relative;
  width: 514px;
  height: auto;
  /* max-width: 100%; */
  /* background-color: var(--primary-color); */
}

.hero__portrait {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  z-index: 2;
  border-radius: 20px;
}

.hero__decor-first {
  position: absolute;
  /* top: -80px; */
  bottom: 0;

  left: -200px;
  z-index: 1;
}

.hero__decor-second {
  position: absolute;
  bottom: 0;
  left: 950px;
}

.hero__content {
  width: 500px;
  height: 386px;
}

.hero__title {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  display: inline-block;
  gap: 9px;
  color: var(--primary-color);
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  letter-spacing: -1.28px;
  margin-bottom: 15px;
}

.hero__heading {
  font-size: 8rem;
  line-height: 0.95; /* 95% */
  letter-spacing: -3.2px;
  margin-bottom: 20px;
}

.hero__heading-name {
  /* color: var(--primary-color); */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
  -webkit-background-clip: text; /* áp gradient lên text */
  -webkit-text-fill-color: transparent; /* ẩn màu chữ gốc */
  background-clip: text; /* fallback cho browser hỗ trợ */
  color: transparent; /* fallback */
}

.hero__desc {
  color: var(--desc-color);
  font-size: 1.8rem;
  line-height: 1.66; /* 166.667% */
  margin-bottom: 50px;
}

.hero__desc-name {
  font-weight: 800;
}

.hero__cta-btn {
  color: #fdfdfd;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 0.66; /* 166.667% */
  margin-right: 30px;
  position: relative;
  z-index: 1;
}


.hero__cta-link {
  color: var(--heading-color);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.66; /* 166.667% */
}
.hero__cta-link:hover {
  text-decoration: underline;
}

.hero__social {
  margin-top: 110px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.hero__social-title {
  color: var(--desc-color);
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.87;
}

.hero__social-icons {
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
}

.hero__social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(8, 4, 21, 0.1);
  color: var(--heading-color);
  transition: all 0.3s ease;
}

.hero__social-icon:hover {
  color: var(--primary-color);
  transform: translateY(-4px);
  border-color: var(--primary-color);
}

/* =============================END HERO============================= */

/* =============================RESPONSIVE============================= */

/* Tablet & Mobile */
@media screen and (max-width: 991px) {
  .hero__heading {
    line-height: 1.19; /* 119.048% */
    letter-spacing: -1.68px;
  }

  .hero__decor-second {
    display: none;
  }

  /* .hero__social {
   justify-content: center;
   margin-top: 80;
 } */
}
/* Table */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .hero__inner {
    gap: 20px;
  }
  .hero__image-wrap {
    width: 50%;
  }

  .hero__content {
    width: 50%;
  }

  .hero__heading {
    font-size: 6rem;
    line-height: 0.95;
    letter-spacing: -3.2px;
    margin-bottom: 15px;
  }

  .hero__desc {
    margin-bottom: 25px;
  }

  .hero__social {
    margin-top: 80px;
  }
}

/* Large Tablet (iPad Pro, Surface, etc.) */
@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .hero__inner {
    gap: 50px;
  }

  .hero__decor-second {
    display: none;
  }
}

/* Mobile */
@media screen and (max-width: 767px) {
  .hero__inner {
    flex-direction: column-reverse;
  }

  .hero__content {
    width: 100%;
  }

  .hero__heading {
    font-size: 4.2rem;
    /* max-width: 260px; */
  }

  .hero__desc {
    font-size: 1.6rem;
    /* max-width: 318px; */
  }
  .hero__social {
    margin-top: 25px;
  }

  .hero__image-wrap {
    width: 100%;
    /* max-width: 259px; */
    text-align: center;
  }

  .hero__image-wrap {
    text-align: center;
    /* height: 100%; */
    overflow: hidden;
  }

  .hero__portrait {
    display: inline-block;
    width: 100%;
    max-width: 259px;
    height: auto;
    margin: 0 auto;
  }

  .hero__decor-first,
  .hero__decor-second {
    display: none;
  }

  .hero__decor-center {
    max-width: 543px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
}

@media (max-width: 575px) {
  .hero__portrait {
    margin-top: 60px;
  }
}
</style>
