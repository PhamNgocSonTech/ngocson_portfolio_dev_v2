<script setup>
  import * as LucideIcons from 'lucide-vue-next'
  import {ArrowRight} from 'lucide-vue-next'
  const props = defineProps({
    name: {type: String, required: true},
    size: {type: [Number, String], default: 24},
    color: {type: String, default: 'currentColor'}
  })


  const iconComponent = LucideIcons[props.name.charAt(0).toUpperCase() + props.name.slice(1)] || null
</script>

<template>
  <component
    :is="iconComponent"
    v-if="iconComponent"
    :size="size"
    :color="color"
  />
  <span v-else>?</span>
</template>

<style scoped>

</style>
