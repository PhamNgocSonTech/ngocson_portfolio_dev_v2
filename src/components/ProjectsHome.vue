<script setup>
import { useImageKit } from '@/composables/useImageKit.js'
const { getImageUrl } = useImageKit()
</script>

<template>
  <!-- Projects -->
  <section id="projects" class="projects-home">
    <div class="main__container">
      <div
        v-motion="{
          initial: { opacity: 0, y: 80 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 800, ease: 'easeOut' }
          }
        }"
        class="project-home__content">
        <h2 class="project-home__heading heading">Take a look at <br> my recent projects</h2>
        <p class="project-home__desc">
          I build both <strong>Web Applications</strong> and
          <strong>Landing Pages</strong> converted from Figma to clean HTML/CSS.
          Here are some of my recent works.
        </p>
      </div>
      <!-- <div class="project-home__card"> -->
      <div class="row">
        <!-- Project Card Item 1 -->
        <div
          v-motion="{
          initial: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 600, ease: 'easeOut', delay: 400 }
          }
        }"
          class="col-12 col-lg-6">
          <div class="project-home__card-item">
            <div class="project-home__card-wrapper">
              <div class="project-home__card-content">
                <h3 class="project-home__card-title">Web Application</h3>
                <p class="project-home__card-desc">
                  Dynamic and interactive apps built with modern front-end technologies,
                  focusing on performance and clean, maintainable code.
                </p>
                <RouterLink :to="{name: 'projects', query:{type: 'webapp'}}" class="project-home__card-link">See
                  More
                </RouterLink>
              </div>
              <div class="project-home__card-img">
                <img :src="getImageUrl('Portfolio-V2/HomePage/project-oculus.jpg')" class="project-home__img" loading="lazy" alt="Web Application Img">
              </div>
              <!-- <img src="../assets/icons/project-icon/project-decor.svg" class="project-home__card-decor" alt=""> -->
            </div>
          </div>
        </div>
        <!-- Project Card Item 2 -->
        <div
          v-motion="{
          initial: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 600, ease: 'easeOut', delay: 400 }
          }
        }"
          class="col-12 col-lg-6">
          <div class="project-home__card-item">
            <div class="project-home__card-wrapper">
              <div class="project-home__card-content">
                <h3 class="project-home__card-title">Landing Page</h3>
                <p class="project-home__card-desc">
                  Pixel-perfect pages converted from Figma into responsive HTML/CSS,
                  optimized for accessibility and cross-device experience.
                </p>
                <RouterLink :to="{name: 'projects', query:{type: 'landing'}}" class="project-home__card-link">See
                  More</RouterLink>
              </div>
              <div class="project-home__card-img">
                <img :src="getImageUrl('Portfolio-V2/HomePage/project-web.jpg')" class="project-home__img" loading="lazy" alt="Landing Page Img">
              </div>
              <!-- <img src="../assets/icons/project-icon/project-decor.svg" class="project-home__card-decor" alt=""> -->
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
      <!-- <div class="project__cta btn">
          <a href="./project.html" class="project__cta-btn">All Projects</a>
      </div> -->
    </div>
  </section>
  <!-- End Projects -->
</template>

<style scoped>
.projects-home {
  margin-top: 140px;
  background: #7189ff;
  padding: 86px 0;
  overflow: hidden;
}

.project-home__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;
  max-width: 998px;
  flex-shrink: 0;
  /* height: 132px; */
}

.project-home__heading {
  max-width: 468px;
  color: var(--second-color);
  font-size: 5.6rem;
  line-height: 1.18; /* 117.857% */
  letter-spacing: -2.24px;
}

.project-home__desc {
  max-width: 370px;
  color: var(--second-color);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.67; /* 166.667% */
  opacity: 0.7;
}

/* .project-home__card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  margin-bottom: 80px;
} */

.project-home__card-item {
  position: relative;
  background-color: var(--second-color);
  border-radius: 20px;
  height: 100%;
  margin-top: 30px;
}

.project-home__card-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 47px;
  padding: 44px 34px;
  height: 100%;
}

.project-home__card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-home__card-title {
  color: var(--heading-color);
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  letter-spacing: -1.28px;
  margin-bottom: auto;
  min-height: 80px;
  display: flex;
  align-items: flex-end; /* Căn text xuống dưới */
}

.project-home__card-desc {
  color: var(--desc-color);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.44; /* 143.75% */
  /* margin-bottom: 20px; */
  margin-bottom: auto;
  min-height: 120px;
}

.project-home__card-link {
  color: var(--heading-color);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.67; /* 166.667% */
  margin-top: auto;
  transition: color 0.2s ease;
}

.project-home__card-link:hover {
  color: var(--primary-color);
}

.project-home__card-img img {
  position: relative;
  max-width: 246px;
  z-index: 1;
}

.project-home__card-decor {
  position: absolute;
  inset: 0 0 auto auto;
  z-index: 0;
}

.project-home__cta {
  background: var(--second-color);
  margin: 0 auto;
}

.project-home__cta-btn {
  display: inline-block;
  color: var(--heading-color);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.67; /* 166.667% */
}

.project-home__cta.btn:hover {
  background-color: var(--primary-color);
}

.project-home__cta.btn:hover .project__cta-btn {
  color: var(--second-color);
}

/* Tablet & Mobile */
@media screen and (max-width: 991px) {
  .project-home__card {
    grid-template-columns: repeat(1, 1fr);
  }

  .project-home__heading {
    font-size: 4.6rem;
  }

  .row {
    row-gap: 30px;
  }
}

/* Table */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .project-home__desc {
    width: 350px;
  }

}

/* Mobile */
@media screen and (max-width: 767px) {
  /* Projects */
  .project-home__content {
    flex-direction: column;
    text-align: center;
  }

  .project-home__heading {
    font-size: 3.6rem;
  }

  .project-home__desc {
    font-size: 1.6rem;
    margin-top: 20px;
  }

  .project-home__card {
    /* width: 350px; */
    margin-bottom: 50px;
  }

  /* .project-home__card-item {
    width: 100%;
  } */
  .project-home__card-wrapper {
    padding: 20px 15px;
    gap: 22px;
  }

  .project-home__card-content {
    max-width: 176px;
    /* width: 100%; */
    /* margin-right: 22px; */
  }

  .project-home__card-title {
    font-size: 2.4rem;
  }

  .project-home__card-desc {
    font-size: 1.4rem;
    margin-bottom: 4px;
  }

  .project-home__card-link {
    font-size: 1.6rem;
  }

  .project-home__card-img img {
    width: 112px;
  }
}

/* Extra Small Mobile */
@media (max-width: 575px) {
  .projects-home {
    max-width: 100%;
  }
}

</style>
