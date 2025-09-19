<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

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
            <RouterLink to="/">
              <img src="../assets/icons/footer-icon.svg" alt="" class="footer-img__icon">
            </RouterLink>
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
                <RouterLink to="/#projects" class="navbar__link">Projects</RouterLink>
              </li>
              <li class="navbar__item">
                <RouterLink to="/#about" class="navbar__link">About</RouterLink>
              </li>
              <li class="navbar__item">
                <RouterLink to="/#skill" class="navbar__link">Skills</RouterLink>
              </li>
              <li class="navbar__item">
                <RouterLink to="/#contact" class="navbar__link">Contact</RouterLink>
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

<style scoped>


/* Tablet & Mobile */
@media screen and (max-width: 991px) {
  .footer__copyright,
  .footer__link {
    font-size: 1.5rem;
  }
}


/* Mobile */
@media screen and (max-width: 767px) {
  /* Footer */

  .footer {
    max-width: 392px;
    margin: 0 auto;
  }

  .navbar--footer .navbar__list {
    display: flex;
    order: 2;
  }

  .navbar--footer .navbar__menu {
    display: none;
  }

  .footer__inner {
    display: flex;
    flex-direction: column;
  }

  .footer__email {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    order: 3;
    margin-bottom: 57px;
  }

  .footer__icon {
    order: 1;
    margin: 0 auto;
  }

  .navbar--footer {
    order: 2;
    margin-top: 20px;
    margin-bottom: 58px;
  }

  .navbar__link {
    font-size: 1.6rem;
  }

  .footer-container__email {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    border: 2px solid rgba(93, 59, 238, 0.2);
    border-radius: 50%;
    background-color: var(--second-color);
  }

  .footer__email-link {
    display: block;
    color: var(--heading-color);
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 1.36; /* 136.364% */
    text-decoration-line: underline;
    text-decoration-style: solid;
  }

  .footer__bottom {
    border-top: none;
  }

  .footer__bottom-inner {
    flex-direction: column;
    align-items: center;
    gap: 36px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .footer__links {
    order: 1;
    display: flex;
    justify-content: center;
    gap: 24px;
    border-bottom: 1px solid rgba(12, 7, 32, 0.2);
    padding-bottom: 12px;
    width: 392px;
  }

  .footer__copyright {
    order: 2;
    text-align: center;
    margin-top: 8px;
    font-size: 1.6rem;
  }

  .footer__link {
    font-size: 1.8rem;
  }
}

/* Extra Small Mobile */
@media (max-width: 575px) {
  .clients {
    margin-top: 150px;
  }

  .navbar--footer {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  .navbar--footer .navbar__list {
    margin-left: 0;
  }

  .navbar__link {
    font-size: 1.4rem;
  }

  /*
  .footer__links {
    margin-left: 20px;
    width: 100%;
    border-bottom-width: 100%;
  } */

  .footer__link {
    font-size: 1.3rem;
  }

  .footer__separator {
    margin-right: 0;
  }

  .footer__copyright {
    margin-top: 6px;
    font-size: 1.4rem;
  }

}

</style>
