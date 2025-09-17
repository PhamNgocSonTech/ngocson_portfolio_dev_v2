<script setup lang="ts">
</script>

<template>
  <!-- Projects -->
  <section id="projects" class="projects-home">
    <div class="main__container">
      <div class="project-home__content">
        <h2 class="project-home__heading heading">Take a look at <br> my recent projects</h2>
        <p class="project-home__desc">
          I build both <strong>Web Applications</strong> and
          <strong>Landing Pages</strong> converted from Figma to clean HTML/CSS.
          Here are some of my recent works.
        </p>
      </div>
      <!-- <div class="project-home__card"> -->
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="project-home__card-item">
            <div class="project-home__card-wrapper">
              <div class="project-home__card-content">
                <h3 class="project-home__card-title">Web Application</h3>
                <p class="project-home__card-desc">
                  Dynamic and interactive apps built with modern front-end technologies,
                  focusing on performance and clean, maintainable code.
                </p>
                <RouterLink to="/projects#webapp" class="project-home__card-link">See
                  More</RouterLink>
              </div>
              <div class="project-home__card-img">
                <img src="../assets/img/project-wally.png" class="project-home__img" alt="">
              </div>
              <!-- <img src="../assets/icons/project-icon/project-decor.svg" class="project-home__card-decor" alt=""> -->
            </div>
          </div>
        </div>
        <!-- Project Card Item 2 -->
        <div class="col-12 col-lg-6">
          <div class="project-home__card-item">
            <div class="project-home__card-wrapper">
              <div class="project-home__card-content">
                <h3 class="project-home__card-title">Landing Page</h3>
                <p class="project-home__card-desc">
                  Pixel-perfect pages converted from Figma into responsive HTML/CSS,
                  optimized for accessibility and cross-device experience.
                </p>
                <RouterLink to="/projects#landing" class="project-home__card-link">See
                  More</RouterLink>
              </div>
              <div class="project-home__card-img">
                <img src="../assets/img/project-bank.png" class="project-home__img" alt="">
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
}

.project-home__card-link:hover {
  text-decoration: underline;
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
</style>
