<script setup lang="ts"></script>

<template>
  <!-- Footer -->
  <footer class="footer">
    <div class="main__container">
      <div class="footer__navigation">
        <div class="footer__inner">
          <div class="footer__email">
            <div class="footer-container__email">
              <img src="../assets/img/email-logo.svg" alt="" class="footer-img__email">
            </div>
            <a href="mailto:phamngocson7a1@gmail.com" class="footer__email-link">phamngocson7a1@gmail.com</a>
          </div>
          <div class="footer__icon">
            <a href="index.html#home">
              <img src="../assets/icons/footer-icon.svg" alt="" class="footer-img__icon">
            </a>
          </div>
          <nav class="navbar navbar--footer">
            <!-- Footer Menu Toggle Tablet/Mobile  -->
            <label for="header__menu-checkbox" class="navbar__menu">
              <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H16" stroke="#5D3BEE" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                <path d="M1 1H16" stroke="#5D3BEE" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
              </svg>

            </label>
            <ul id="footer-nav" class="navbar__list">
              <li class="navbar__item">
                <a href="#projects" class="navbar__link">Projects</a>
              </li>
              <li class="navbar__item">
                <a href="index.html#journey" class="navbar__link">About</a>
              </li>
              <li class="navbar__item">
                <a href="index.html#service" class="navbar__link">Skills</a>
              </li>
              <li class="navbar__item">
                <a href="index.html#contact" class="navbar__link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="footer__bottom">
        <!-- <div class="footer__bottom-inner"> -->
        <p class="footer__copyright">©2025 Designed & Built with ❤️ by Ngoc Son</p>
        <!-- <div class="footer__links">
                <a href="#!" class="footer__link">Github</a>
                <span class="footer__separator"></span>
                <a href="#!" class="footer__link">Linked</a>
                <p class="footer__line"></p>
            </div> -->
        <!-- </div> -->
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<style scoped></style>
