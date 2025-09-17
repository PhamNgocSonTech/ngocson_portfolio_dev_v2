<script setup></script>

<template>
  <!-- PC Header -->
  <header class="header fixed">
    <div class="main__container">
      <div class="header__inner">
        <!-- Email -->
        <div class="header__email">
          <div class="header-container__email">
            <img src="../assets/img/email-logo.svg" alt="" class="header-img__email">
          </div>
          <a href="mailto:phamngocson7a1@gmail.com" class="header__email-link">phamngocson7a1@gmail.com</a>
        </div>
        <!-- Logo -->
        <div class="header__icon">
          <!-- <img src="./assets/img/logo.svg" alt="" class="header-img__icon"> -->
          <a href="index.html#home">
            <img src="../assets/icons/header-icon.svg" alt="" class="header-img__icon">
          </a>

        </div>
        <!-- Navbar -->
        <nav class="navbar">
          <!-- Header Menu Toggle Tablet/Mobile  -->
          <label for="header__menu-checkbox" class="navbar__menu">
            <!-- <img src="./assets/img//toggle-menu.svg" alt="" class="navbar__menu-icon"> -->
            <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7H16" stroke="#5D3BEE" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
              <path d="M1 1H16" stroke="#5D3BEE" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>

          </label>
          <!-- Navigation -->
          <ul id="pc-nav" class="navbar__list">
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
  </header>

  <!-- Tablet/Mobile Header -->
  <header class="header header--mobile">
    <input class="header__menu-checkbox" type="checkbox" name="" id="header__menu-checkbox" hidden>
    <!-- Overlay     -->
    <label for="header__menu-checkbox" class="header__overlay"></label>
    <!-- Menu Content -->
    <div class="header__menu-drawer">
      <!-- Logo -->
      <div class="header__menu-icon">
        <a href="index.html#home" class="header__menu-icon-link">
          <img src="../assets/icons/header-icon.svg" alt="" class="header__menu-icon-img">
        </a>
        <ul id="mobile-nav">
        </ul>

      </div>
    </div>
  </header>
  <!-- End Header -->
</template>

<style scoped>
</style>
