<script setup>
import { useImageKit } from '@/composables/useImageKit.js'
import { computed } from 'vue'
import Icon from '@/components/Icon.vue'
// import {Github, BadgeCheck} from 'lucide-vue-next'
const { getImageUrl } = useImageKit()
// const projectProps = defineProps({
//   img: String,
//   title: String,
//   desc: String,
//   techStack: Array,
//   github: String,
//   liveDemo: String,
//   type: String
// })

const projectProps = defineProps({
  project: {
    type: Object,
    require: true,
    validator: (val) => {
      return val.title  && val.img && val.status
    },
  },
})

const BADGE_STATUS = {
  'coming-soon': {
    text: 'Coming Soon',
    class: 'badge-coming-soon',
    color: '#F8463F',
  },

  'in-development': {
    text: 'In Development',
    class: 'badge-development',
    color: '#FF9800',
  },

  new: {
    text: 'New',
    class: 'badge-new',
    color: '#4CAF50',
  },
}

const badgeConfig = computed(() => {
  return BADGE_STATUS[projectProps.project.status] || null
})

const showBadge = computed(() => {
  return projectProps.project.status !== 'completed'
})


const isAccessible = computed(() => {
  return projectProps.project.status === 'new' || projectProps.project.status === 'completed'
})



const githubLink = computed(() => ({
  href:isAccessible.value ? projectProps.project.github : '#!',
  target:isAccessible.value ? '_blank' : '',
  text: !isAccessible.value ? 'Coming Soon' : 'GitHub',
  disabled: !isAccessible.value
}))

const liveDemo = computed(() => ({
  href:isAccessible.value ? projectProps.project.liveDemo : '#!',
  target:isAccessible.value ? '_blank' : '',
  text: !isAccessible.value ? 'Coming Soon' : 'Live Demo',
  disabled: !isAccessible.value
}))

const getOptimizeImg = computed(() => {
  return getImageUrl(projectProps.project.img, 'w-800,q-80,f-webp')
})

const handleDisabledClick = (e) => {
  if (!isAccessible.value) {
    e.preventDefault()
  }
}

</script>

<template>
  <div class="project__card-item">
    <div v-if="showBadge && badgeConfig" class="badge-container">
      <span
        class="badge-ultra"
        :class="badgeConfig.class"
        :style="{ backgroundColor: badgeConfig.color }"
      >
        <span>{{ badgeConfig.text }}</span>
      </span>
    </div>

    <div class="project__card-wrapper">
      <div class="project__card-img">
        <img
          :src="getOptimizeImg"
          class="project__img"
          :alt="`Screenshot of ${project.title} project`"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="project__card-content">
        <h3 class="project__card-title">{{ project.title }}</h3>
        <p class="project__card-desc">{{ project.desc }}</p>
        <div v-if="project.techStack && project.techStack.length" class="project__tech-stack">
          <span class="tech-stack-label">Tech Stack:</span>
          <div class="tech-tags">
            <span v-for="tech in project.techStack" :key="tech" class="tech-tag"> {{ tech }}</span>
          </div>
        </div>
        <div class="project__card-actions">
          <a
            :href="githubLink.href"
            :class="['project__card-link github-link', { disabled: githubLink.disabled }]"
            :target=" githubLink.target"
            @click="handleDisabledClick"
          >
            <Icon name="github"/>
            {{ githubLink.text }}
          </a>
          <a
            :href="liveDemo.href"
            :class="['project__card-link demo-link', { disabled: liveDemo.disabled }]"
            :target="liveDemo.target"
            @click="handleDisabledClick"
          >
            <Icon name="badgeCheck" color="green"/>
            {{ liveDemo.text }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/project.css';

.badge-container {
  position: relative;
  border-radius: 8px;
}

.badge-ultra {
  position: absolute;
  top: 15px;
  right: 15px;
  color: white;
  padding: 6px 10px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  z-index: 10;
  transition: all 0.3s ease;
  white-space: nowrap;
  /* Center alignment for rotation */
  transform: rotate(12deg);
  transform-origin: center center;
  min-width: 60px;
  text-align: center;
}

/* Disabled Link Styles */
.project__card-link.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
  filter: grayscale(50%);
}

.project__card-link.disabled:hover {
  transform: none;
  box-shadow: none;
}

/* Hover effect for badge */
.project__card-item:hover .badge-ultra {
  transform: rotate(5deg) scale(1.1);
}

</style>
