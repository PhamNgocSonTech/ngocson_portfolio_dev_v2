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

  .about-me__statistic {
    flex-direction: row;
    gap: 50px;
  }

  .about-me__statistic-detail {
    font-size: 1.6rem;
  }

  .about-me__statistic-detail strong {
    font-size: 3rem;
  }
  /* Đảo thứ tự theo thiết kế */
  .about-me__statistic-detail:nth-child(1) {
    order: 2;
  }
  .about-me__statistic-detail:nth-child(2) {
    order: 1;
  }
  .about-me__statistic-detail:nth-child(3) {
    order: 3;
  }

  .about-me__thumb {
    max-width: 350px;
    height: 276px;
  }

  .about-me__play {
    width: 77px;
    height: 77px;
  }

  .about-me__intro.btn {
    width: 118px;
    height: 44px;
  }

  .about-me__intro-btn {
    font-size: 1.2rem;
  }

  /* Feedback */
  .feedback__heading {
    font-size: 3.6rem;
  }

  .feedback__desc {
    font-size: 1.6rem;
  }

  .feedback__review {
    margin-top: 40px;
    font-size: 1.8rem;
  }

  .feedback__decor-right,
  .feedback__decor-left {
    max-width: 98px;
  }

  .feedback__content,
  .feedback__detail {
    width: 100%;
  }

  /* FAQ */
  .faq {
    margin-top: 120px;
  }

  .faq__heading {
    font-size: 3.6rem;
  }

  .faq__group {
    margin-top: 42px;
  }

  .faq__question-text {
    font-size: 2.4rem;
    margin: 40px 0 15px;
    max-width: 264px;
  }

  .faq__answer-text {
    font-size: 1.6rem;
    margin: 15px 0 18px;
  }

  .faq__item input:checked ~ .faq__answer {
    margin: -15px 0 21px;
  }

  .faq__button {
    width: 33px;
    height: 33px;
    flex: 0 0 33px;
  }

  .faq__button img {
    width: 6px;
    height: 6px;
  }

  /* Atmosphere */
  .atmosphere {
    margin-top: 120px;
  }

  .atmosphere__heading {
    font-size: 3.6rem;
  }

  .atmosphere__desc {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  .atmosphere__email-link {
    font-size: 2rem;
  }

  .atmosphere__email {
    margin-bottom: 60px;
  }

  .atmosphere__media {
    display: flex;
    gap: 20px;
    flex-direction: row;
    overflow: hidden;
  }
  .atmosphere__indicators {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 40px;
  }
  .atmosphere__dot {
    /* display: inline-block; */
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #080415;
    opacity: 0.2;
  }

  .atmosphere__dot--active {
    position: relative;
    width: 20px;
    height: 20px;
    background: var(--second-color); /* khoảng trắng giữa */
    border: 1px solid var(--primary-color); /* viền ngoài */
    border-radius: 50%;
    opacity: 1;
  }

  .atmosphere__dot--active::before {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary-color);
  }

  /* Booking */
  .booking {
    width: 100%;
    margin-top: 120px;
    padding: 35px 0 35px;
  }

  .booking__icon-img {
    width: 48px;
    height: 48px;
  }

  .booking__content {
    max-width: 350px;
    height: auto;
  }

  .booking__heading {
    font-size: 3.6rem;
    max-width: 225px;
    margin: 0 auto;
  }

  .booking__desc {
    font-size: 1.6rem;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .booking__cta.btn {
    width: 147px;
  }

  .booking__cta-btn {
    font-size: 1.6rem;
  }

  .booking__img-left,
  .booking__img-right,
  .booking__img-center {
    display: none;
  }

  .booking__img-center--mobile {
    display: block;
  }
}


</style>
