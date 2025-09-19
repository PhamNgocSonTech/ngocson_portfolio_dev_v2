<script setup>
import { RouterLink } from 'vue-router'
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
            <img src="../assets/icons/header-icon.svg" alt="" class="header-img__icon" />
          </RouterLink>
        </div>
        <!-- Navbar -->
        <nav class="navbar">
          <!-- Header Menu Toggle Tablet/Mobile  -->
          <label for="header__menu-checkbox" class="navbar__menu">
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
          </label>
          <!-- Navigation -->
          <ul id="pc-nav" class="navbar__list">
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
  </header>

  <!-- Tablet/Mobile Header -->
  <header class="header header--mobile">
    <input
      class="header__menu-checkbox"
      type="checkbox"
      name=""
      id="header__menu-checkbox"
      hidden
    />
    <!-- Overlay     -->
    <label for="header__menu-checkbox" class="header__overlay"></label>
    <!-- Menu Content -->
    <div class="header__menu-drawer">
      <!-- Logo -->
      <div class="header__menu-icon">
        <a href="index.html#home" class="header__menu-icon-link">
          <img src="../assets/icons/header-icon.svg" alt="" class="header__menu-icon-img" />
        </a>
        <ul id="mobile-nav"></ul>
      </div>
    </div>
  </header>
  <!-- End Header -->
</template>

<style scoped>

/* PC */
@media screen and (min-width: 992px) {
  .show-on-mobile {
    display: none;
  }

  .navbar__menu {
    display: none;
  }

  .header__menu-drawer {
    display: none;
  }
}

@media screen and (max-width: 991px) {
  .header__inner {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
  }

  .header__icon {
    order: 1;
    flex: 0 0 auto;
  }

  .header__email {
    display: flex;
    align-items: center;
    /* gap: 0px; */
    order: 2;
    margin-left: auto;
  }

  .header__menu-icon-img {
    width: 100px;
    height: 100px;
  }

  .navbar {
    order: 3;
    margin-left: 10px;
  }

  .navbar__list,
  .header__email-link {
    display: none;
  }

  .navbar__menu {
    display: block;
  }

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
    opacity: 0;
    visibility: hidden;
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
  .header__inner {
    display: flex;
    justify-content: center;
  }
  .header__email-link {
    display: block;
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
    /* margin-right: auto; */
    margin: 0;
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
