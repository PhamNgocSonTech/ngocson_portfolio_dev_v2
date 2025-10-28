<script setup>
import avatar from '/src/assets/img/uifaces-cartoon-avatar.jpg'
import coverImage from '/src/assets/img/demo-cover-blog.webp'
import { useBlogStore } from '@/stores/blogStore.js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const blogStore = useBlogStore()
const blog = ref(null)

onMounted(async () => {
  try {
    blog.value = await blogStore.fetchBlogById(route.params.id)
  }catch (e) {
    console.error('Error fetching blog:', e)
  }

})
</script>

<template>
  <div class="mt-20 blog__detail main__container">
    <div v-if="blogStore.isLoading" class="text-center text-3xl text-gray-500">Loading blog...</div>
    <div v-else-if="blog" class="mt-60 text-center">
      <img class="w-full rounded-lg mb-10" :src="blog.cover_image" alt="cover image" />
      <div class="mb-6">
        <p class="text-gray-700">Posted on: {{ blog.readable_publish_date }}</p>
      </div>
      <h1 class="text-6xl font-bold text-(--primary-color) mb-8">
        {{ blog.title }}
      </h1>
      <div class="flex items-center justify-between gap-4 mb-10">
        <div class="flex flex-col items-center">
          <img
            class="w-20 h-20 rounded-full object-cover"
            :src="blog.user.profile_image"
            alt="avatar"
          />
          <p class="text-2xl font-semibold">{{blog.user.name}}</p>
        </div>
        <p class="text-2xl text-gray-500">{{ blog.reading_time_minutes }} min read</p>
      </div>
      <div>
        <div v-html="blog.body_html" class="prose prose-lg max-w-none"></div>
      </div>
    </div>
    <div v-else class="text-center text-2xl text-red-500 mt-10">
      Blog not found.
    </div>
  </div>
</template>

<style scoped>
.prose img {
  border-radius: 8px;
}
</style>
