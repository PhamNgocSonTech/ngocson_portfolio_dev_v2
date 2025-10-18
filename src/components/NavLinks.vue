<script setup>
import { navLinks } from '@/data/navLinks.js'
import { RouterLink } from 'vue-router'
import Icon from '@/components/Icon.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const activeDropdown = ref(null)

const toggleDropdown = (label) => {
  activeDropdown.value = activeDropdown.value === label ? null : label
}

const closeDropdown = () => {
  activeDropdown.value = null
}

// Đóng dropdown khi click bên ngoài
const handleClickOutside = (event) => {
  const dropdownWrapper = event.target.closest('.navbar__dropdown-wrapper')
  if (!dropdownWrapper) {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <ul class="navbar__list">
    <li v-for="link in navLinks" :key="link.to" class="navbar__item relative">
      <!-- Nếu có submenu -->
      <div v-if="link.children" class="navbar__dropdown-wrapper">
        <div
          tabindex="0"
          role="button"
          class="navbar__link cursor-pointer flex items-center gap-1"
          @click.stop="toggleDropdown(link.label)"
        >
          {{ link.label }}
          <Icon
            name="chevronDown"
            class="navbar__chevron ml-1 w-4 mt-2"
            :class="{ 'navbar__chevron--active': activeDropdown === link.label }"
          />
        </div>

<!--        <transition name="accordion-slide">-->
<!--          <ul v-if="activeDropdown === link.label" class="navbar__dropdown">-->
<!--            <li-->
<!--              v-for="child in link.children"-->
<!--              :key="child.label"-->
<!--              class="navbar__dropdown&#45;&#45;item"-->
<!--              @click="closeDropdown"-->
<!--            >-->
<!--              <RouterLink :to="child.to" class="block px-4 py-2 rounded-md">-->
<!--                {{ child.label }}-->
<!--              </RouterLink>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </transition>-->

          <!-- Desktop: Dropdown -->
          <transition name="dropdown-fade">
            <ul
              v-if="activeDropdown === link.label"
              class="navbar__dropdown navbar__dropdown--desktop"
            >
              <li
                v-for="child in link.children"
                :key="child.label"
                class="navbar__dropdown--item"
                @click="closeDropdown"
              >
                <RouterLink
                  :to="child.to"
                  class="block px-4 py-2 rounded-md"
                >
                  {{ child.label }}
                </RouterLink>
              </li>
            </ul>
          </transition>

          <!-- Mobile/Tablet: Accordion List -->
          <transition name="accordion-slide">
            <ul
              v-if="activeDropdown === link.label"
              class="navbar__submenu navbar__submenu--mobile"
            >
              <li
                v-for="child in link.children"
                :key="child.label"
                class="navbar__submenu--item"
                @click="closeDropdown"
              >
                <RouterLink
                  :to="child.to"
                  class="navbar__submenu--link"
                >
                  {{ child.label }}
                </RouterLink>
              </li>
            </ul>
          </transition>
      </div>

      <!-- Nếu không có submenu -->
      <RouterLink v-else :to="link.to" class="navbar__link" @clic="closeDropdown">
        {{ link.label }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>

.navbar__dropdown-wrapper {
  position: relative;
}

/* Chevron icon animation */
.navbar__chevron {
  transition: transform 0.3s ease;
}

.navbar__chevron--active {
  transform: rotate(180deg);
}

/*
.navbar__dropdown-wrapper::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 260px;
  height: 18px;
}
*/

.navbar__dropdown-wrapper:hover .navbar__dropdown {
  display: block;
}

.navbar__dropdown-wrapper:hover .navbar__dropdown {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.navbar__dropdown--desktop  {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  min-width: 260px;
  padding: 10px;
  border-radius: 6px;
  transform: translateX(-50%);
  margin: 0;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  z-index: 1000;
}

.navbar__dropdown--item {
  transition:
    transform 0.4s ease,
    color 0.3s ease;
}

.navbar__dropdown--item:hover {
  background-color: rgba(93, 59, 238, 0.08); /* tím nhạt mờ */
  transform: translateX(5px);
  color: var(--primary-color);
}

.navbar__dropdown--item a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar__dropdown--item:hover a {
  color: var(--primary-color);
  font-weight: 500;
}

/* Mobile Submenu - Hidden by default */
.navbar__submenu--mobile {
  display: none;
}

/* Dropdown fade transition */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-fade-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}

.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}

/* Accordion slide transition */
.accordion-slide-enter-active {
  transition: all 0.3s ease-out;
  overflow: hidden;
}

.accordion-slide-leave-active {
  transition: all 0.25s ease-in;
  overflow: hidden;
}

.accordion-slide-enter-from,
.accordion-slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-slide-enter-to,
.accordion-slide-leave-from {
  max-height: 500px;
  opacity: 1;
}

@media screen and (max-width: 991px) {
  .navbar__list.navbar--drawer {
    margin-top: 30px;
  }

  .navbar__list.navbar--drawer .navbar__link {
    display: flex;
    padding: 18px 0;
    font-weight: 500;
  }

  .navbar__list {
    display: none;
  }

  .navbar .navbar__list {
    display: none;
  }

  .header__menu-drawer .navbar__list {
    display: block;
  }


  /* Hide desktop dropdown on mobile */
  .navbar__dropdown--desktop {
    display: none !important;
  }

  /* Show menu on mobile */
  .navbar__submenu--mobile {
    display: block;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.02);
    border-radius: 6px;
    margin: 0;
  }

  .navbar__submenu--item {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .navbar__submenu--item:last-child {
    border-bottom: none;
  }

  .navbar__submenu--link {
    display: block;
    padding: 8px 14px;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.8rem;
  }

  .navbar__submenu--link:hover,
  .navbar__submenu--link.router-link-active {
    background-color: rgba(93, 59, 238, 0.08);
    color: var(--primary-color);
    padding-left: 28px;
  }

}
</style>
