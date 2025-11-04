<script setup>
import Icon from '@/components/Icon.vue'
import { defineAsyncComponent, onMounted, ref } from 'vue'
import demoCoverBlog from '../assets/img/demo-cover-blog.webp'
// import BlogCard from '@/components/blogs/BlogCard.vue'
const BlogCard = defineAsyncComponent(() => import('@/components/blogs/BlogCard.vue'))
import { useBlogStore } from '@/stores/blogStore'
import Loader from '@/components/ui/Loader.vue'
const blogStore = useBlogStore()

onMounted(() => {
  blogStore.fetchBlogs()
})

</script>

<template>

  <div class="blog main__container">
    <div class="mt-60 text-center">
      <h2 class="font-bold text-8xl text-(--primary-color)">From the blog</h2>
      <p class="text-4xl mt-4 text-(--desc-color)">
        Learning, building, and sharing powered by <a class="text-(--primary-color) hover:underline" href="https://dev.to/" target="_blank">Dev.to</a> — made by devs, for devs 👩‍💻👨‍💻
      </p>
    </div>
<!--    <div v-if="blogStore.isLoading" class="text-center mt-10 text-3xl text-gray-500">-->
<!--      Loading blogs...-->
<!--    </div>-->
    <Loader v-if="blogStore.isLoading"/>
    <div class="row blog__list">
      <div v-for="blog in blogStore.blogs" :key="blog.id" class="col-12 col-md-6 col-lg-4 blog__col">
        <BlogCard :blogProps="blog" />
       </div>
    </div>
  </div>
</template>

<style scoped>
.blog__list {
  margin-top: 60px;
}

/* Quan trọng: làm cho col có chiều cao full */
.blog__col {
  display: flex;
  margin-bottom: 20px; /* Khoảng cách giữa các hàng */
}

@media (max-width: 768px) {
  .blog__col {
    margin-bottom: 16px;
  }
}
/*
.blog__list {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}
*/

</style>
