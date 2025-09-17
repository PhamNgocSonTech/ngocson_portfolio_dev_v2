<script setup lang="ts"></script>

<template>
  <section id="about" class="about-me">
    <div class="main__container">
      <div class="about-me__content">
                    <span class="about-me__title">Hey,,,,It’s Son
                        <img class="about-me__icon" src="../assets/icons/about-me-icon/about-me-icon.svg" alt="">
                    </span>
        <h2 class="about-me__heading heading">Frontend Developer</h2>
        <p class="about-me__desc">I design and build modern, responsive web interfaces with clean code and
          attention to detail. My focus is on creating
          user-friendly experiences and maintaining scalable, maintainable front-end architectures that
          bring ideas to life.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

.about-me {
  margin-top: 140px;
}

.about-me__content {
  max-width: 570px;
  text-align: center;
  margin: 0 auto;
}

.about-me__title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  color: var(--primary-color);
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  letter-spacing: -1.28px;
  margin-bottom: 10px;
}

.about-me__heading {
  font-size: 5.6rem;
  line-height: 1.18; /* 117.857% */
  letter-spacing: -2.24px;
  margin-bottom: 15px;
}

.about-me__desc {
  color: var(--desc-color);
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.67; /* 166.667% */
  margin-bottom: 70px;
}

.about-me__statistic {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto 70px;
  max-width: 946px;
  height: 146px;
  border-width: 1px 0;
  border-style: solid;
  border-color: rgba(8, 4, 21, 0.2);
}

.about-me__statistic-detail {
  color: var(--desc-color);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.67; /* 166.667% */
}

.about-me__statistic-detail strong {
  color: var(--heading-color);
  font-size: 5.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.35; /* 135.714% */
  letter-spacing: 1.68px;
  text-decoration: underline;
}

.about-me__media {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.about-me__thumb {
  max-width: 100%;
  /* height: 628px; */
}

.about-me__play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 111px;
  height: 111px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  cursor: pointer;
  transition: box-shadow 0.5s ease;
}

.about-me__play:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.about-me__intro {
  background-color: var(--second-color);
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.about-me__intro-btn {
  display: inline-block;
  color: var(--desc-color);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.67; /* 166.667% */
  text-transform: uppercase;
  /* padding: 16px 28px; */
}

.about-me__intro:hover {
  background-color: var(--primary-color);
  opacity: 1;
}

.about-me__intro.btn:hover .about-me__intro-btn {
  color: var(--second-color);
}

</style>
