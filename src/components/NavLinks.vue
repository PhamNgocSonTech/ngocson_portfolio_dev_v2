<script setup>
import { navLinks } from '@/data/navLinks.js'
import { RouterLink } from 'vue-router'
</script>

<template>
  <ul id="pc-nav" class="navbar__list">
    <li v-for="link in navLinks" :key="link.to" class="navbar__item">
      <RouterLink :to="link.to" class="navbar__link">{{link.label}}</RouterLink>
    </li>
  </ul>
</template>

<style scoped></style>
