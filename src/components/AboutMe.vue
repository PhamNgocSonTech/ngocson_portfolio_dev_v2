<script setup>
</script>

<template>
  <section id="about" class="about-me">
    <div class="main__container">
      <div
        v-motion="{
          initial: {opacity: 0, x: -40},
          visible: {
            opacity: 1,
            x: 0,
            transition: {delay: 200, ease: 'easeInOut'},
          },
      }"
           class="about-me__content">
          <span class="about-me__title">Hey,,,,It’s Son
            <img class="about-me__icon" src="../assets/icons/about-me-icon/about-me-icon.svg" alt="">
          </span>
        <h2 class="about-me__heading">Frontend Developer</h2>
        <p class="about-me__desc">I design and build modern, responsive web interfaces with clean code and
          attention to detail. My focus is on creating
          user-friendly experiences and maintaining scalable, maintainable front-end architectures that
          bring ideas to life.
        </p>
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
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.about-me__desc {
  color: var(--desc-color);
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.67; /* 166.667% */
  margin-bottom: 70px;
}


.about-me__intro.btn:hover .about-me__intro-btn {
  color: var(--second-color);
}

/* Mobile */
@media screen and (max-width: 767px) {
  /* About Me */
  .about-me {
    margin-top: 120px;
  }

  .about-me__title {
    font-size: 2rem;
  }

  .about-me__icon {
    width: 24px;
    height: 24px;
  }

  .about-me__heading {
    font-size: 3.6rem;
    margin-bottom: 20px;

  }

  .about-me__desc {
    font-size: 1.6rem;
    margin-bottom: 50px;
  }
}


</style>
