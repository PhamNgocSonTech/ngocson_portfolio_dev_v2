<script setup>
import { RouterLink } from 'vue-router'
import NavLinks from '@/components/NavLinks.vue'
import { ref } from 'vue'
import MenuDrawer from '@/components/MenuDrawer.vue'
import LogoMenuDrawer from '@/assets/icons/ngoc-son-logo.svg'

const isOpen = ref(false);

const toggleMenuHeader = () => {
  isOpen.value = !isOpen.value;
  console.log("Toggle Menu Header")

}

const closeMenuHeader = () => {
  isOpen.value = false;
  console.log("Close Menu Header")

}
</script>

<template>
  <!-- PC Header -->
  <header class="header fixed">
    <div class="main__container">
      <div class="header__inner">
        <!-- Email -->
        <div class="header__email">
          <div class="header-container__email">
            <img src="../assets/img/email-logo.svg" alt="" class="header-img__email" />
          </div>
          <a href="mailto:phamngocson7a1@gmail.com" class="header__email-link"
            >phamngocson7a1@gmail.com</a
          >
        </div>
        <!-- Logo -->
        <div class="header__icon">
          <RouterLink to="/">
            <img src="https://ik.imagekit.io/ngocsondev/Portfolio-V2/NgocSonLogo/NgocSonLogo.svg" alt="" class="header-img__icon" />
          </RouterLink>
        </div>
        <!-- Navbar -->
        <nav class="navbar">
          <!-- Header Menu Toggle Tablet/Mobile  -->
          <button class="navbar__menu" @click="toggleMenuHeader">
            <svg
              width="17"
              height="8"
              viewBox="0 0 17 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7H16"
                stroke="#5D3BEE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 1H16"
                stroke="#5D3BEE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <!-- Navigation -->
          <NavLinks/>
        </nav>
      </div>
    </div>
  </header>

<!--  Menu Drawer Tablet/Mobile-->
<MenuDrawer
  :is-open="isOpen"
  logo-alt="Logo Menu Drawer"
  logo-link="/"
  :logo-src="LogoMenuDrawer"
  @close="closeMenuHeader"
/>
  <!-- End Header -->
</template>

<style scoped>
/* PC */
@media screen and (min-width: 992px) {
  /*
   .show-on-mobile {
    display: none;
  }

  .navbar__menu {
    display: none;
  }

  .header__menu-drawer {
    display: none;
  }*/

}

@media screen and (max-width: 991px) {
  /*
   .header__inner {
    display: flex;
    align-items: center;
  */

  .header__inner {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 10px;
  }

  .header__icon {
    order: 2;
    justify-self: center;
    flex: none;
  }

  .header__email {
    display: flex;
    align-items: center;
    justify-self: start;
    order: 1;
  }

  .header__menu-icon-img {
    width: 100px;
    height: 100px;
  }

  .navbar {
    order: 3;
    margin-left: 0;
    justify-self: end;
  }

  .header__email-link {
    display: none;
  }

  /*
  .navbar__menu {
    display: block;
  }
*/
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

  .header__overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 5;
    opacity: 1;
    visibility: visible;
    transition: 0.5s ease;
  }

  .header__menu-drawer {
    position: fixed;
    inset: 0 0 0 40%;
    background-color: var(--background-color);
    z-index: 5;
    transform: translateX(100%);
    transition: 0.4s ease;
    padding: 60px;
  }

  .header__menu-drawer.is-open {
    transform: translateX(0);
  }

  .header__email-link {
    display: none;
  }

  .header__menu-drawer {
    display: block;
  }


  .header__menu-checkbox:checked ~ .header__overlay {
    opacity: 1;
    visibility: visible;
  }

  .header__menu-checkbox:checked ~ .header__menu-drawer {
    transform: translateX(0);
  }

  .header__menu-icon ul {
    margin-top: 30px;
  }

  .header__menu-icon ul a {
    display: block;
    padding: 18px 0;
    font-weight: 500;
  }
}

/* Table */
@media screen and (min-width: 768px) and (max-width: 991px) {
  /*.header__inner {
    display: flex;
    justify-content: center;
  } */

  .header__email-link {
    display: none;
  }

  .header__icon {
    order: 2;
    margin: 0 auto;
  }

  .header__email {
    display: flex;
    align-items: center;
    /* gap: 0px; */
    order: 1;
  }

  .navbar {
    order: 3;
    margin-left: auto;
  }
}

/* Mobile */
@media screen and (max-width: 767px) {
  .header__menu-drawer {
    padding: 40px;
  }

  .header {
    /* border-width: 377px; */
    border-bottom: 1px solid #d6d3e2;
  }
}
</style>
