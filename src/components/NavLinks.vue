<script setup>
import { navLinks } from '@/data/navLinks.js'
import { RouterLink } from 'vue-router'
</script>

<template>
  <ul class="navbar__list">
    <li v-for="link in navLinks" :key="link.to" class="navbar__item">
      <RouterLink :to="link.to" class="navbar__link">{{link.label}}</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
@media screen and (max-width: 991px) {
  .navbar__list.navbar--drawer{
    margin-top: 30px;
  }

  .navbar__list.navbar--drawer .navbar__link  {
    display: block;
    padding: 18px 0;
    font-weight: 500;
  }
}
</style>
