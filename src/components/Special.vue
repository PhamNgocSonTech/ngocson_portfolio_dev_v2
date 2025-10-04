<script setup>
// import { ref } from 'vue'
//
// const currentSlide = ref(0);
// const totalSlides = 3;
//
// const nextSlide = () => {
//   currentSlide.value = (currentSlide.value + 1) % totalSlides
// }
//
// const goToSlide = (index) => {
//   currentSlide.value = index;
// }
//
// let startX = 0;
// const handleTouchStart = (e) => {
//   startX = e.touches[0].clientX;
// }
//
// const handleTouchEnd = (e) => {
//   const endX = e.changedTouches[0].clientX;
//   const diff = startX - endX;
//
//   if(Math.abs(diff) > 50) {
//     if(diff > 0) {
//       nextSlide()
//     }else {
//       currentSlide.value = currentSlide.value > 0 ? currentSlide - 1 : totalSlides - 1;
//     }
//   }
// }
</script>

<template>
  <!-- Special -->
  <section
    v-motion="{
    initial: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 800, ease: 'easeOut' }
    }
  }"
    class="special">
    <div class="main__container">
      <div  class="special__content">
        <h2 class="special__heading heading">My Focus</h2>
        <p class="special__desc">I build websites that look clean, work smoothly, and leave a creative
          touch.
        </p>
      </div>
      <!-- Radio controls đặt trên đầu -->
      <input type="radio" name="special" id="dot1" checked>
      <input type="radio" name="special" id="dot2">
      <input type="radio" name="special" id="dot3">
      <div class="special__list">
        <!-- Special Item 1 -->
        <div
          v-motion="{
          initial: { opacity: 0, y: 50 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: { duration: 600, ease: 'easeOut', delay: 200 }
          }
        }"
          class="special__item">
          <div class="special__icon-wrapper">
            <img
              v-motion="{
              initial: { scale: 1 },
              visibleOnce: {
                scale: [1, 1.1, 1],
                transition: { duration: 2500, repeat: Infinity, ease: 'easeInOut' }
              }
            }"
              src="../assets/icons/special-icon/special-icon-1.svg"
              alt=""
              class="special__item-icon">
          </div>
          <h3 class="special__item-title">Code & Craft</h3>
          <p class="special__item-desc">Clean, thoughtful code that turns ideas into polished products.
          </p>
        </div>

        <!-- Special Item 2 -->
        <div
          v-motion="{
          initial: { opacity: 0, y: 50 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: { duration: 600, ease: 'easeOut', delay: 400 }
          }
        }"
          class="special__item">
          <div class="special__icon-wrapper">
            <img
              v-motion="{
              initial: { scale: 1 },
              visibleOnce: {
                scale: [1, 1.1, 1],
                transition: { duration: 2500, repeat: Infinity, ease: 'easeInOut' }
              }
            }"
              src="../assets/icons/special-icon/special-icon-2.svg"
              alt=""
              class="special__item-icon">
          </div>
          <h3 class="special__item-title">Design Systems</h3>
          <p class="special__item-desc">Scalable frameworks that keep UI and UX consistent and efficient.
          </p>
        </div>

        <!-- Special Item 3 -->
        <div
          v-motion="{
          initial: { opacity: 0, y: 50 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: { duration: 600, ease: 'easeOut', delay: 600 }
          }
        }"
          class="special__item">
          <div class="special__icon-wrapper">
            <img
              v-motion="{
              initial: { scale: 1 },
              visibleOnce: {
                scale: [1, 1.1, 1],
                transition: { duration: 2500, repeat: Infinity, ease: 'easeInOut' }
              }
            }"
              src="../assets/icons/special-icon/special-icon-3.svg"
              alt=""
              class="special__item-icon">
          </div>
          <h3 class="special__item-title">Creative Coding</h3>
          <p class="special__item-desc">Intuitive interfaces and seamless experiences that engage users.
          </p>
        </div>

      </div>
      <!-- Dots in Mobile -->
      <!-- Dots -->
      <div class="special__dots">
        <label for="dot1"></label>
        <label for="dot2"></label>
        <label for="dot3"></label>
      </div>
    </div>
  </section>
  <!-- End Special -->
</template>

<style scoped>

.special {
  margin-top: 133px;
}

.special__content {
  text-align: center;
  margin-bottom: 60px;
}

.special__heading {
  font-size: 5.6rem;
  line-height: 1.18; /* 117.857% */
  letter-spacing: -2.24px;
  margin-bottom: 20px;
}

.special__desc {
  width: 534px;
  color: var(--desc-color);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.67; /* 166.667% */
  margin: 0 auto;
}

.special__list {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 30px;
}

.special__item {
  width: 370px;
  min-height: 306px;
  padding: 33px 43px;
  background-color: #f8f7ff;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;
}

.special__item:hover {
  background-color: #f3f0ff;
  box-shadow: 0 4px 12px rgba(98, 76, 171, 0.25); /* đậm hơn khi hover */
}

.special__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  border: 1px solid rgba(8, 4, 21, 0.05);
  margin-bottom: 22px;
  flex-shrink: 0;
}

.special__item-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.special__item-title {
  color: var(--heading-color);
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  letter-spacing: -1.28px;
  margin-bottom: 15px;
  min-height: 6rem;
  display: flex;
  align-items: flex-start;
}

.special__item-desc {
  color: var(--desc-color);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.67; /* 166.667% */
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
}

/* PC */
@media screen and (min-width: 992px) {
  .special__dots {
    display: none;
  }

  input[type="radio"] {
    display: none;
  }

}

@media screen and (max-width: 991px) {
  .special__content {
    margin-bottom: 20px;
  }

  .special__item-title {
    font-size: 3rem;
  }

  .special__item-desc {
    font-size: 1.5rem;
  }
}

/* Table */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .special__dots {
    display: none;
  }

  input[type="radio"] {
    display: none;
  }
}

/* Mobile */
@media screen and (max-width: 767px) {

  /* Special */
  .special__desc {
    width: 350px;
  }

  .special {
    width: 100%;
    overflow: hidden;
  }

  .special__list {
    transition: transform 0.5s ease;
    gap: 20px;
  }

  .special__item {
    flex: 0 0 100%;
    /* min-width: 100%; */
    /* transform: translate(-0%);
    transition: transform 0.3s ease; */
  }

  input[type="radio"] {
    display: none;
  }

  /* transform dựa trên radio checked */
  #dot1:checked ~ .special__list {
    transform: translateX(0%);
  }
  #dot2:checked ~ .special__list {
    transform: translateX(-105%);
  }
  #dot3:checked ~ .special__list {
    transform: translateX(-210%);
  }

  /* Dots */
  .special__dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }

  .special__dots label {
    width: 20px;
    height: 20px;
    border: 1px solid var(--primary-color);
    border-radius: 50%;
    background: transparent;
    display: inline-block;
    cursor: pointer;
    margin: 0 4px;
    position: relative;
  }

  .special__dots input[type="radio"]:checked +

    /* Khi radio checked thì label kế nó được active */
  #dot1:checked ~ .special__dots label[for="dot1"],
  #dot2:checked ~ .special__dots label[for="dot2"],
  #dot3:checked ~ .special__dots label[for="dot3"] {
    background: var(--second-color);
  }

  #dot1:checked ~ .special__dots label[for="dot1"]::before,
  #dot2:checked ~ .special__dots label[for="dot2"]::before,
  #dot3:checked ~ .special__dots label[for="dot3"]::before {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary-color);
    border-radius: 50%;
  }
}
</style>
