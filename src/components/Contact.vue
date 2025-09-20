<script setup lang="ts"></script>

<template>
  <!-- Booking -->
  <section id="contact" class="booking">
    <div class="main__container">
      <div class="booking__content">
        <div class="booking__icon">
          <img src="../assets/icons/booking-icon/booking-icon.svg" alt="" class="booking__icon-img">

        </div>
        <h2 class="booking__heading heading">Got a project? Let’s talk</h2>
        <p class="booking__desc">I’m always open to discussing new ideas, creative work, or opportunities to
          collaborate.
          Let’s connect and bring your project to life.
        </p>
        <div class="booking__cta btn wow animate__pulse animate__infinite">
          <a href="mailto:phamngocson7a1@gmail.com" class="booking__cta-btn">Contact me</a>
        </div>

        <img src="../assets/icons/booking-icon/booking-decor-left.svg" alt="" class="booking__img-left">
        <img src="../assets/icons/booking-icon/booking-decor-center.svg" alt="" class="booking__img-center">
        <img src="../assets/icons/booking-icon/booking-decor-center-mobile.svg" alt=""
             class="booking__img-center booking__img-center--mobile">

        <img src="../assets/img/booking-decor-right.svg" alt="" class="booking__img-right">
      </div>
    </div>
  </section>
  <!-- End Booking -->
</template>

<style scoped>

.booking {
  margin-top: 140px;
  padding: 68px 0 68px;
  position: relative;
  background: var(--background-color);
}

.booking__content {
  width: 574px;
  height: 352px;
  margin: 0 auto;
  text-align: center;
}

.booking__icon {
  /* margin: 0 auto; */
  margin-bottom: 10px;
}

.booking__heading {
  font-size: 5.6rem;
  line-height: 1.18; /* 117.857% */
  letter-spacing: -2.24px;
  margin-bottom: 20px;
}

.booking__desc {
  color: var(--desc-color);
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
  margin-bottom: 30px;
}

.booking__cta {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
  z-index: 1;
}

.booking__cta-btn {
  color: #fdfdfd;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.67; /* 166.667% */
  cursor: pointer;
}

.booking__img-left {
  position: absolute;
  left: 0;
  bottom: 0;
  /* transform: translate(-20%, 20%); */
  z-index: 1;
}

.booking__img-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.booking__img-right {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

/* PC */
@media screen and (min-width: 992px) {
  .booking__img-center--mobile {
    display: none;
  }
}

/* Tablet & Mobile */
@media screen and (max-width: 991px) {
  .booking__content {
    width: 100%;
  }

  .booking__img-right,
  .booking__img-left {
    display: none;
  }
  .booking__img-center--mobile {
    display: none;
  }

  .booking__img-center {
    width: 100%;
  }
}

/* Mobile */
@media screen and (max-width: 767px) {
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
