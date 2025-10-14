<script setup>
import { navLinks } from '@/data/navLinks.js'
import { RouterLink } from 'vue-router'
import Icon from '@/components/Icon.vue'
</script>

<template>
  <ul class="navbar__list">
    <li
      v-for="link in navLinks"
      :key="link.to"
      class="navbar__item relative group"
    >
      <!-- Nếu có submenu -->
      <div v-if="link.children"
           class="navbar__dropdown-wrapper">
        <div
          tabindex="0"
          role="button"
          class="navbar__link cursor-pointer flex items-center"
        >
          {{ link.label }}
          <Icon name="chevronDown" class="ml-1 w-4 mt-2" />
        </div>

        <ul
          class="navbar__dropdown"
        >
          <li
            v-for="child in link.children"
            :key="child.label"
          >
            <RouterLink
              :to="child.to"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {{ child.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Nếu không có submenu -->
      <RouterLink v-else :to="link.to" class="navbar__link">
        {{ link.label }}
      </RouterLink>
    </li>
  </ul>
</template>


<style scoped>

.navbar__dropdown-wrapper {
  position: relative;
}

.navbar__dropdown-wrapper::after {
  content: "";
  position: absolute;
  background: transparent;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 260px;
  height: 18px;
}

.navbar__dropdown-wrapper:hover .navbar__dropdown {
  display: block;
}

.navbar__dropdown-wrapper:hover .navbar__dropdown {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.navbar__dropdown {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  min-width: 260px;
  padding: 10px;
  border-radius: 6px;
  transform: translateX(-50%);
  margin: 0;

  /* Hidden by default */
  background: #ffffff;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.2s ease, visibility 0.2s ease;

  /* Nền trắng đục - dễ đọc mọi trạng thái header */
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}

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
