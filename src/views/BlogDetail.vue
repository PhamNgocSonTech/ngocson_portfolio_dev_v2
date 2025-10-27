<script setup>
import avatar from '/src/assets/img/uifaces-cartoon-avatar.jpg'
import coverImage from '/src/assets/img/demo-cover-blog.webp'
</script>

<template>
  <div class="mt-20 blog__detail main__container">

    <div class="mt-60 text-center">
      <img class="w-full rounded-lg mb-10" :src="coverImage" alt="cover image">
      <div class="mb-6">
        <p class="text-gray-700">Posted on: 27 October 2025 (today)</p>
      </div>
      <h1 class="text-6xl font-bold text-(--primary-color) mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
      <div class="flex items-center justify-between gap-4 mb-10">
        <div class="flex flex-col items-center">
          <img class="w-20 h-20 rounded-full object-cover" :src="avatar" alt="avatar">
          <p class="text-2xl font-semibold">Ngoc Son</p>
        </div>
        <p class="text-2xl text-gray-500">5 min read time</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
