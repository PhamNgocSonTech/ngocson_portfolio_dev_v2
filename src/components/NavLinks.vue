<script setup>
import { navLinks } from '@/data/navLinks.js'
import { RouterLink } from 'vue-router'
import Icon from '@/components/Icon.vue'
</script>

<template>
  <ul class="navbar__list">
    <li v-for="link in navLinks" :key="link.to" class="navbar__item relative group">
      <div v-if="link.children" class="navbar__link cursor-pointer flex items-center">
        {{link.label}}
        <Icon name="chevronDown" class="ml-1 w-4 mt-2"/>

        <ul class=" absolute top-full left-0 mt-2
            w-32
            py-2 text-sm text-amber-700 bg-yellow-50
            rounded-md shadow-lg
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-300
            z-10  ">
          <li v-for="child in link.children" :key="child.label">
            <RouterLink :to="child.to" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{child.label}}</RouterLink>
          </li>
        </ul>
      </div>
        <!-- No submenu -->
      <RouterLink v-else :to="link.to" class="navbar__link">{{link.label}}</RouterLink>
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

  .navbar__list {
    display: none;
  }

  .navbar .navbar__list{
    display: none;
  }

  .header__menu-drawer .navbar__list {
    display: block;
  }
}
</style>
