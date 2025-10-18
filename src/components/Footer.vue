<script setup>
import { RouterLink } from 'vue-router'
import NavLinks from '@/components/NavLinks.vue'
import MenuDrawer from '@/components/MenuDrawer.vue'
import LogoMenuDrawer from '@/assets/icons/ngoc-son-logo.svg'
import { ref } from 'vue'
import Icon from '@/components/Icon.vue'

const isOpen = ref(false)

const toggleMenuFooter = () => {
  isOpen.value = !isOpen.value
  console.log("Toggle Menu Footer")
}

const closeMenuFooter = () => {
  isOpen.value = false
  console.log("Close Menu Footer")
}

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
            <a href="mailto:phamngocson7a1@gmail.com" class="footer__email-link" target="_blank">phamngocson7a1@gmail.com</a>
          </div>
          <div class="footer__icon">
            <RouterLink to="/">
              <img src="https://ik.imagekit.io/ngocsondev/Portfolio-V2/NgocSonLogo/NgocSonLogo.svg" alt="" class="footer-img__icon">
            </RouterLink>
          </div>
          <nav class="navbar navbar--footer">
            <!-- Footer Menu Toggle Tablet/Mobile  -->
            <p class="footer__social-title">Follow me on:</p>

            <div class="footer__social-icons">
              <a
                href="https://github.com/PhamNgocSonTech"
                class="footer__social-icon"
                target="_blank"
              >
                <Icon name="github"/>
              </a>

              <a
                href="https://www.facebook.com/PhamNgocSonBB/"
                class="footer__social-icon"
                target="_blank"
              >
                <Icon name="facebook"/>
              </a>

              <a
                href="https://www.instagram.com/genjikaze/"
                class="footer__social-icon"
                target="_blank"
              >
                <Icon name="instagram"/>
              </a>
            </div>

          </nav>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copyright">©2025 Designed & Built with ❤️ by <a href="https://github.com/PhamNgocSonTech" class="footer__link">Ngoc Son</a></p>
        <div class="footer__credits">Icons 😍 by
          <a href="https://simpleicons.org/" class="footer-credits__link" target="_blank">Simple Icons</a>
          <a href="https://www.vectorlogo.zone/" class="footer-credits__link" target="_blank">VectorLogo.Zone</a>
          <a href="https://www.svgrepo.com/" class="footer-credits__link" target="_blank">SVG Repo</a>
          and official brand assets from
          <a href="https://www.jwt.io/" class="footer-credits__link" target="_blank">JWT.io</a>
          <a href="https://devtools.vuejs.org/" class="footer-credits__link" target="_blank">Vue Devtools</a>
          <a href="https://pinia.vuejs.org/" class="footer-credits__link" target="_blank">Pinia</a>
        </div>
      </div>
    </div>
  </footer>
  <!--  Menu Drawer Tablet/Mobile-->
  <MenuDrawer
    :is-open="isOpen"
    logo-alt="Footer Logo"
    logo-link="/"
    :logo-src="LogoMenuDrawer"
    @close="closeMenuFooter"

  />
  <!-- End Footer -->
</template>

<style scoped>

.footer__credits {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  color: #525771;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.67;
  opacity: 0.6;
}

.footer-credits__link {
  color: var(--primary-color);
  text-decoration: none;
}

.footer-credits__link:hover {
  text-decoration: underline;
  text-decoration-color: var(--primary-color);
}

.footer__social-title {
  margin-right: 10px;
  color: var(--primary-color);
  font-weight: bold;
}

.footer__social-icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer__social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(8, 4, 21, 0.1);
  gap: 10px;
  transition: all 0.3s ease;
}

.footer__social-icon:hover {
  color: var(--primary-color);
  transform: translateY(-4px);
  border-color: var(--primary-color);
}

/* PC */
@media screen and (min-width: 992px) {
  .navbar__menu {
    display: none;
  }
}

/* Tablet & Mobile */
@media screen and (max-width: 991px) {
  .navbar {
    order: 3;
    margin-left: 10px;
  }

  .navbar__list,
  .footer__email-link {
    display: none;
  }

  /*.navbar__menu {
    display: block;
  }*/

  .navbar__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    border: 2px solid rgba(93, 59, 238, 0.2);
    border-radius: 50%;
    background-color: var(--second-color);
  }
  .navbar--footer .navbar__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    border: 2px solid rgba(93, 59, 238, 0.2);
    border-radius: 50%;
    background-color: var(--second-color);
  }
  .footer__copyright,
  .footer__link {
    font-size: 1.5rem;
  }
}

/* Table */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .navbar {
    order: 3;
    margin-left: auto;
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

  .footer__copyright, .footer__credits {
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
  .navbar--footer {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  .navbar--footer {
    margin-left: 0;
  }

  .footer__copyright .footer__link {
    color: var(--primary-color);
    font-size: 1.3rem;
  }

  .footer__copyright, .footer__credits {
    margin-top: 6px;
    font-size: 1.4rem;
  }
}
</style>
