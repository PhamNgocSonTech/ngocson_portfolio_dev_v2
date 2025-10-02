<script setup>
// import 'animate.css';
import { useImageKit } from '@/composables/useImageKit.js'
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
                initial: { scale: 1.1 },
                enter: {
                  scale: [1, 1.2, 1],
                  transition: { duration: 2000, repeat: Infinity, ease: 'easeInOut' }
                },
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
              <!-- <a href="#!"><img src="./assets/img/be-icon.svg" alt=""></a>
              <a href="#!"><img src="./assets/img/dribbble-icon.svg" alt=""></a>
              <a href="#!"><img src="./assets/img/instagram-icon.svg" alt=""></a> -->
              <a
                href="https://github.com/PhamNgocSonTech"
                class="hero__social-icon"
                target="_blank"
              >
                <!-- <svg width="32" height="32" viewBox="0 0 100 100" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="github">
                        <g id="github_2">
                            <path id="Vector"
                                d="M50.0002 1C22.3894 1 0 23.3855 0 51.0002C0 73.092 14.3266 91.834 34.1933 98.4456C36.692 98.9083 37.6096 97.3609 37.6096 96.0402C37.6096 94.848 37.563 90.909 37.5418 86.7311C23.6313 89.7557 20.6961 80.8317 20.6961 80.8317C18.4217 75.0523 15.1446 73.5159 15.1446 73.5159C10.6083 70.4124 15.4865 70.476 15.4865 70.476C20.5075 70.8289 23.1513 75.6287 23.1513 75.6287C27.6108 83.2728 34.8482 81.0627 37.7014 79.7854C38.15 76.5534 39.4461 74.348 40.8758 73.0994C29.7703 71.8347 18.0954 67.5474 18.0954 48.3889C18.0954 42.9303 20.0487 38.4697 23.2474 34.9682C22.7282 33.7086 21.0169 28.6233 23.7317 21.7361C23.7317 21.7361 27.9304 20.3923 37.4853 26.8614C41.4734 25.7532 45.7509 25.198 50.0002 25.1791C54.2495 25.198 58.5301 25.7532 62.526 26.8614C72.0696 20.3923 76.2624 21.7361 76.2624 21.7361C78.9839 28.6233 77.2718 33.7086 76.7526 34.9682C79.9584 38.4697 81.8983 42.9299 81.8983 48.3889C81.8983 67.5929 70.2014 71.8218 59.0677 73.0594C60.861 74.6111 62.459 77.6541 62.459 82.3187C62.459 89.0086 62.4009 94.3932 62.4009 96.0402C62.4009 97.3707 63.3009 98.9299 65.8357 98.4389C85.6915 91.8199 100 73.0845 100 51.0002C100 23.3855 77.6137 1 50.0002 1Z"
                                fill="#161614" />
                            <path id="Vector_2"
                                d="M18.7266 72.2265C18.6168 72.4748 18.2255 72.5493 17.8698 72.3791C17.5071 72.2159 17.3032 71.8771 17.4208 71.6277C17.5286 71.3721 17.92 71.3007 18.282 71.4724C18.6455 71.6352 18.8525 71.9771 18.7266 72.2265ZM21.1862 74.421C20.9477 74.6421 20.4815 74.5394 20.165 74.19C19.838 73.8414 19.7768 73.3755 20.0188 73.1508C20.2646 72.93 20.7168 73.0332 21.0446 73.3822C21.3717 73.7347 21.4352 74.1978 21.1858 74.4214L21.1862 74.421ZM22.8736 77.2287C22.5669 77.4416 22.0657 77.242 21.7563 76.7974C21.4501 76.3531 21.4501 75.8197 21.763 75.606C22.0736 75.3923 22.5669 75.5845 22.8806 76.0256C23.1865 76.4778 23.1865 77.0111 22.8732 77.2291L22.8736 77.2287ZM25.7268 80.4808C25.4527 80.7827 24.8692 80.7019 24.4417 80.2894C24.0049 79.8863 23.8829 79.3141 24.1578 79.0118C24.4351 78.709 25.0221 78.7941 25.4527 79.2032C25.8868 79.6055 26.0193 80.1819 25.7272 80.4808H25.7268ZM29.4145 81.5788C29.2941 81.9701 28.7318 82.1481 28.1655 81.9819C27.6001 81.8105 27.2299 81.3517 27.344 80.956C27.4616 80.5619 28.0263 80.3764 28.5969 80.5545C29.1616 80.7251 29.5326 81.1803 29.4149 81.5788H29.4145ZM33.612 82.0442C33.6261 82.4568 33.1458 82.7987 32.5513 82.8062C31.9533 82.8191 31.4697 82.4854 31.4635 82.0799C31.4635 81.6635 31.9329 81.3246 32.5305 81.3148C33.125 81.3031 33.612 81.6344 33.612 82.0442ZM37.735 81.8862C37.8064 82.2885 37.3931 82.7019 36.8029 82.8117C36.2225 82.9175 35.6853 82.6693 35.6112 82.2705C35.539 81.858 35.9602 81.445 36.5394 81.338C37.1307 81.2352 37.6597 81.4772 37.735 81.8862Z"
                                fill="#161614" />
                        </g>
                    </g>
                </svg> -->
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="github">
                    <g id="github_2">
                      <path
                        id="Vector"
                        d="M50.0002 1C22.3894 1 0 23.3855 0 51.0002C0 73.092 14.3266 91.834 34.1933 98.4456C36.692 98.9083 37.6096 97.3609 37.6096 96.0402C37.6096 94.848 37.563 90.909 37.5418 86.7311C23.6313 89.7557 20.6961 80.8317 20.6961 80.8317C18.4217 75.0523 15.1446 73.5159 15.1446 73.5159C10.6083 70.4124 15.4865 70.476 15.4865 70.476C20.5075 70.8289 23.1513 75.6287 23.1513 75.6287C27.6108 83.2728 34.8482 81.0627 37.7014 79.7854C38.15 76.5534 39.4461 74.348 40.8758 73.0994C29.7703 71.8347 18.0954 67.5474 18.0954 48.3889C18.0954 42.9303 20.0487 38.4697 23.2474 34.9682C22.7282 33.7086 21.0169 28.6233 23.7317 21.7361C23.7317 21.7361 27.9304 20.3923 37.4853 26.8614C41.4734 25.7532 45.7509 25.198 50.0002 25.1791C54.2495 25.198 58.5301 25.7532 62.526 26.8614C72.0696 20.3923 76.2624 21.7361 76.2624 21.7361C78.9839 28.6233 77.2718 33.7086 76.7526 34.9682C79.9584 38.4697 81.8983 42.9299 81.8983 48.3889C81.8983 67.5929 70.2014 71.8218 59.0677 73.0594C60.861 74.6111 62.459 77.6541 62.459 82.3187C62.459 89.0086 62.4009 94.3932 62.4009 96.0402C62.4009 97.3707 63.3009 98.9299 65.8357 98.4389C85.6915 91.8199 100 73.0845 100 51.0002C100 23.3855 77.6137 1 50.0002 1Z"
                        fill="#161614"
                      />
                      <path
                        id="Vector_2"
                        d="M18.7266 72.2265C18.6168 72.4748 18.2255 72.5493 17.8698 72.3791C17.5071 72.2159 17.3032 71.8771 17.4208 71.6277C17.5286 71.3721 17.92 71.3007 18.282 71.4724C18.6455 71.6352 18.8525 71.9771 18.7266 72.2265ZM21.1862 74.421C20.9477 74.6421 20.4815 74.5394 20.165 74.19C19.838 73.8414 19.7768 73.3755 20.0188 73.1508C20.2646 72.93 20.7168 73.0332 21.0446 73.3822C21.3717 73.7347 21.4352 74.1978 21.1858 74.4214L21.1862 74.421ZM22.8736 77.2287C22.5669 77.4416 22.0657 77.242 21.7563 76.7974C21.4501 76.3531 21.4501 75.8197 21.763 75.606C22.0736 75.3923 22.5669 75.5845 22.8806 76.0256C23.1865 76.4778 23.1865 77.0111 22.8732 77.2291L22.8736 77.2287ZM25.7268 80.4808C25.4527 80.7827 24.8692 80.7019 24.4417 80.2894C24.0049 79.8863 23.8829 79.3141 24.1578 79.0118C24.4351 78.709 25.0221 78.7941 25.4527 79.2032C25.8868 79.6055 26.0193 80.1819 25.7272 80.4808H25.7268ZM29.4145 81.5788C29.2941 81.9701 28.7318 82.1481 28.1655 81.9819C27.6001 81.8105 27.2299 81.3517 27.344 80.956C27.4616 80.5619 28.0263 80.3764 28.5969 80.5545C29.1616 80.7251 29.5326 81.1803 29.4149 81.5788H29.4145ZM33.612 82.0442C33.6261 82.4568 33.1458 82.7987 32.5513 82.8062C31.9533 82.8191 31.4697 82.4854 31.4635 82.0799C31.4635 81.6635 31.9329 81.3246 32.5305 81.3148C33.125 81.3031 33.612 81.6344 33.612 82.0442ZM37.735 81.8862C37.8064 82.2885 37.3931 82.7019 36.8029 82.8117C36.2225 82.9175 35.6853 82.6693 35.6112 82.2705C35.539 81.858 35.9602 81.445 36.5394 81.338C37.1307 81.2352 37.6597 81.4772 37.735 81.8862Z"
                        fill="#161614"
                      />
                    </g>
                  </g>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/PhamNgocSonBB/"
                class="hero__social-icon"
                target="_blank"
              >
                <!-- <svg width="16" height="16" viewBox="0 0 16 16" fill=""
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.7355 4.09587C14.0402 2.90353 13.0967 1.95931 11.9036 1.26476C10.7113 0.570201 9.41006 0.222534 7.99995 0.222534C6.58984 0.222534 5.28861 0.570201 4.0955 1.26476C2.90317 1.95931 1.95895 2.90353 1.26439 4.09587C0.569835 5.2882 0.222168 6.5902 0.222168 8.00031C0.222168 9.41042 0.569057 10.7124 1.26439 11.9048C1.95972 13.0979 2.90317 14.0413 4.09628 14.7359C5.28861 15.4304 6.58984 15.7781 7.99995 15.7781C9.41006 15.7781 10.7113 15.4304 11.9044 14.7359C13.0967 14.0413 14.0409 13.0979 14.7363 11.9048C15.4308 10.7124 15.7777 9.41042 15.7777 8.00031C15.7777 6.5902 15.4308 5.2882 14.7355 4.09587ZM7.99995 1.51365C9.5555 1.51365 10.9337 2.01142 12.1377 3.0062C11.4222 3.91931 10.3597 4.67065 8.94884 5.26176C8.1695 3.85165 7.32483 2.67409 6.4125 1.73065C6.94295 1.58598 7.47028 1.51365 7.99995 1.51365ZM2.95217 3.95587C3.53861 3.21931 4.24017 2.64453 5.06072 2.2292C6.00339 3.16331 6.86906 4.3292 7.6585 5.7292C6.10295 6.19587 4.45872 6.4292 2.72661 6.4292C2.28095 6.4292 1.94417 6.41909 1.7155 6.39809C1.95428 5.50598 2.3665 4.69242 2.95217 3.95587ZM1.51328 8.00031C1.51328 7.95831 1.51561 7.90698 1.52106 7.84476C1.5265 7.78254 1.52883 7.7312 1.52883 7.6892C1.72639 7.70009 2.02739 7.70476 2.43183 7.70476C4.50539 7.70476 6.43428 7.41931 8.21772 6.8492C8.36317 7.13931 8.51406 7.46598 8.66883 7.8292C7.64217 8.05709 6.58906 8.61165 5.51028 9.49365C4.4315 10.3756 3.64439 11.3035 3.14661 12.2781C2.05772 11.0438 1.51328 9.61809 1.51328 8.00031ZM7.99995 14.487C6.52683 14.487 5.20461 14.0304 4.0325 13.1189C4.49995 12.1956 5.21783 11.3129 6.18772 10.4736C7.15684 9.63365 8.11895 9.1102 9.07328 8.90253C9.67372 10.5615 10.0789 12.2773 10.2866 14.0514C9.52906 14.3415 8.76684 14.487 7.99995 14.487ZM13.5066 11.407C12.9886 12.2361 12.3197 12.9159 11.4999 13.4455C11.3133 11.8278 10.9555 10.2512 10.4274 8.71587C11.1523 8.66453 11.8002 8.63809 12.3718 8.63809C12.9933 8.63809 13.6832 8.66453 14.4399 8.71587C14.3357 9.68031 14.0246 10.5771 13.5066 11.407ZM12.5422 7.51809C11.6399 7.51809 10.8054 7.55465 10.0377 7.62698C9.84017 7.11909 9.66439 6.69909 9.50883 6.36698C11.1157 5.66231 12.2559 4.80676 12.9303 3.80031C13.8636 4.90009 14.3723 6.15465 14.4547 7.56476C13.8232 7.53365 13.1854 7.51809 12.5422 7.51809Z"
                        fill="#EA4C89" />
                </svg> -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                >
                  <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/genjikaze/"
                class="hero__social-icon"
                target="_blank"
              >
                <!-- <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.4913 4.7237C15.4554 3.91017 15.3239 3.35087 15.1354 2.86624C14.941 2.35181 14.6419 1.89124 14.25 1.50836C13.8671 1.11953 13.4035 0.817394 12.8951 0.626016C12.4076 0.437559 11.8512 0.306001 11.0377 0.270132C10.2181 0.231225 9.95791 0.222229 7.87916 0.222229C5.80041 0.222229 5.54021 0.231225 4.72364 0.267094C3.91011 0.302963 3.35081 0.434638 2.86629 0.622978C2.35175 0.817394 1.89118 1.1165 1.5083 1.50836C1.11947 1.89124 0.81745 2.35484 0.625955 2.86332C0.437497 3.35087 0.30594 3.90713 0.270071 4.72066C0.231164 5.54027 0.222168 5.80047 0.222168 7.87922C0.222168 9.95797 0.231164 10.2182 0.267033 11.0347C0.302902 11.8483 0.434577 12.4076 0.623034 12.8922C0.81745 13.4066 1.11947 13.8672 1.5083 14.2501C1.89118 14.6389 2.35478 14.941 2.86326 15.1324C3.35081 15.3209 3.90707 15.4524 4.72072 15.4883C5.53717 15.5243 5.79748 15.5332 7.87624 15.5332C9.95499 15.5332 10.2152 15.5243 11.0318 15.4883C11.8453 15.4524 12.4046 15.3209 12.8891 15.1324C13.9181 14.7346 14.7316 13.9211 15.1294 12.8922C15.3178 12.4046 15.4495 11.8483 15.4853 11.0347C15.5212 10.2182 15.5302 9.95797 15.5302 7.87922C15.5302 5.80047 15.5272 5.54027 15.4913 4.7237ZM14.1125 10.9749C14.0796 11.7227 13.954 12.1265 13.8493 12.3956C13.592 13.0627 13.0626 13.5921 12.3956 13.8493C12.1264 13.954 11.7197 14.0796 10.9749 14.1124C10.1673 14.1484 9.92508 14.1573 7.8822 14.1573C5.83931 14.1573 5.59407 14.1484 4.78942 14.1124C4.04167 14.0796 3.63788 13.954 3.36869 13.8493C3.03676 13.7267 2.73462 13.5322 2.48938 13.278C2.23514 13.0297 2.04073 12.7306 1.91805 12.3987C1.81336 12.1295 1.68776 11.7227 1.65493 10.978C1.61895 10.1704 1.61007 9.92806 1.61007 7.88518C1.61007 5.84229 1.61895 5.59705 1.65493 4.79252C1.68776 4.04477 1.81336 3.64098 1.91805 3.37179C2.04073 3.03974 2.23514 2.73772 2.49242 2.49236C2.74058 2.23812 3.03968 2.04371 3.37173 1.92115C3.64092 1.81646 4.04774 1.69086 4.79246 1.65791C5.60003 1.62205 5.84235 1.61305 7.88512 1.61305C9.93104 1.61305 10.1732 1.62205 10.9779 1.65791C11.7256 1.69086 12.1294 1.81646 12.3986 1.92115C12.7306 2.04371 13.0327 2.23812 13.2779 2.49236C13.5322 2.74064 13.7266 3.03974 13.8493 3.37179C13.954 3.64098 14.0796 4.04769 14.1125 4.79252C14.1484 5.60009 14.1574 5.84229 14.1574 7.88518C14.1574 9.92806 14.1484 10.1673 14.1125 10.9749Z"
                        fill="#F58529" />
                    <path
                        d="M7.87837 3.94623C5.70697 3.94623 3.94519 5.70789 3.94519 7.87941C3.94519 10.0509 5.70697 11.8126 7.87837 11.8126C10.0499 11.8126 11.8116 10.0509 11.8116 7.87941C11.8116 5.70789 10.0499 3.94623 7.87837 3.94623ZM7.87837 10.4308C6.46967 10.4308 5.32701 9.28822 5.32701 7.87941C5.32701 6.4706 6.46967 5.32805 7.87837 5.32805C9.28718 5.32805 10.4297 6.4706 10.4297 7.87941C10.4297 9.28822 9.28718 10.4308 7.87837 10.4308Z"
                        fill="#DD2A7B" />
                    <path
                        d="M12.8855 3.79036C12.8855 4.29733 12.4744 4.7084 11.9674 4.7084C11.4604 4.7084 11.0493 4.29733 11.0493 3.79036C11.0493 3.28327 11.4604 2.87231 11.9674 2.87231C12.4744 2.87231 12.8855 3.28327 12.8855 3.79036Z"
                        fill="#515BD4" />
                </svg> -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                >
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                    cx="19.38"
                    cy="42.035"
                    r="44.899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#fd5"></stop>
                    <stop offset=".328" stop-color="#ff543f"></stop>
                    <stop offset=".348" stop-color="#fc5245"></stop>
                    <stop offset=".504" stop-color="#e64771"></stop>
                    <stop offset=".643" stop-color="#d53e91"></stop>
                    <stop offset=".761" stop-color="#cc39a4"></stop>
                    <stop offset=".841" stop-color="#c837ab"></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                    cx="11.786"
                    cy="5.54"
                    r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#4168c9"></stop>
                    <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                  ></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                  ></path>
                </svg>
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
  /* padding: 16px 37px; */
  margin-right: 30px;
  /* cursor: pointer; */
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
  color: var(--primary-color);
}

.hero__social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(8, 4, 21, 0.1);
  transition: background-color 0.3s ease;
}

.hero__social-icon:hover {
  background-color: #d9e1e8;
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
