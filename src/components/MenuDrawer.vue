<script setup>
import NavLinks from '@/components/NavLinks.vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: false,
  },
  logoSrc: {
    type: [String, Object],
    required: true,
  },

  logoLink: {
    type: String,
    required: true,
  },

  logoAlt: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['close'])

const closeMenu = () => {
  emit('close')
}

</script>

<template>
  <!-- Tablet/Mobile Header -->
  <div class="header header--mobile">

  <!-- Overlay -->
  <div v-if="isOpen" class="header__overlay" @click="closeMenu"></div>

  <!-- Menu Drawer (Mobile/Tablet) -->
  <div class="header__menu-drawer" :class="{ 'is-open': props.isOpen }">
    <!-- Logo -->
    <div class="header__menu-icon">
      <RouterLink
        :to="props.logoLink"
        class="header__menu-icon-link"
        @click="closeMenu">

        <img
          :src="props.logoSrc"
          :alt="props.logoAlt"
          class="header__menu-icon-img" />
      </RouterLink>

      <NavLinks
        class="navbar--drawer"
        @click="closeMenu"
      />
    </div>
  </div>
  </div>
</template>

<style scoped>
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

.header__menu-icon-img {
  width: 100px;
  height: 100px;
}

.header__menu-icon ul {
  margin-top: 30px;
}

.header__menu-icon ul a {
  display: block;
  padding: 18px 0;
  font-weight: 500;
}

/* Mobile */
@media screen and (max-width: 767px) {
  .header__menu-drawer {
    padding: 40px;
  }
}
</style>

