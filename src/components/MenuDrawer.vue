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
  <div v-if="isOpen" class="header__overlay" :class="{'is-active': isOpen}" @click="closeMenu"></div>

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
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 5;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease;

}

.header__overlay.is-active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.header__menu-drawer {
  position: fixed;
  inset: 0 0 0 40%;
  z-index: 5;
  transform: translateX(100%);
  padding: 60px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  /* Glass morphism effect */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
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

