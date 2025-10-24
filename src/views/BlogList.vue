<script setup>
import Icon from '@/components/Icon.vue'
import { onMounted, ref } from 'vue'
import demoCoverBlog from '../assets/img/demo-cover-blog.webp'
import BlogCard from '@/components/blogs/BlogCard.vue'
import { useBlogStore } from '@/stores/blogStore'
const blogStore = useBlogStore()

onMounted(() => {
  blogStore.fetchBlogs()
})
// const blogs = ref([
//   {
//     id: 1,
//     title: 'Boost your conversion rate',
//     desc:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     coverImg: demoCoverBlog,
//   },
//   {
//     id: 2,
//     title: 'Boost your conversion rate 2',
//     desc:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     coverImg: demoCoverBlog,
//   },
//
//   {
//     id: 3,
//     title: 'Boost your conversion rate 3',
//     desc:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     coverImg: demoCoverBlog,
//   },
//
//   {
//     id: 4,
//     title: 'Boost your conversion rate 4',
//     desc:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     coverImg: demoCoverBlog,
//   },
//
//   {
//     id: 5,
//     title: 'Boost your conversion rate 5',
//     desc:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     coverImg: demoCoverBlog,
//   },
//
//   {
//     id: 6,
//     title: 'Boost your conversion rate 6',
//     desc:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     coverImg: demoCoverBlog,
//   },
// ])
</script>

<template>
  <div class="blog main__container">
    <div class="mt-60 text-center">
      <h2 class="font-bold text-8xl text-(--primary-color)">From the blog</h2>
      <p class="text-4xl mt-4 text-(--desc-color)">
        Learn how to grow your business with our expert advice.
      </p>
    </div>
    <div v-if="blogStore.isLoading" class="text-center mt-10 text-3xl text-gray-500">
      Loading blogs...
    </div>
    <div class="row blog__list">
      <div v-for="blog in blogStore.blogs" :key="blog.id" class="col-12 col-md-6 col-lg-4">
        <BlogCard :blog="blog" />
       </div>
    </div>
  </div>
</template>

<style scoped>
.blog__list {
  margin-top: 60px;
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
