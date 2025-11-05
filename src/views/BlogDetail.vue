<script setup>
import defaultCover from '/src/assets/img/image-not-found.svg'
import dayjs from 'dayjs'
import { useBlogStore } from '@/stores/blogStore.js'
import { nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Loader from '@/components/ui/Loader.vue'
import Icon from '@/components/Icon.vue'
const route = useRoute()
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'


const blogStore = useBlogStore()
const blog = ref(null)

const getTagStyle = (tag) => {
  const hue = Math.floor(Math.random() * 360)
  return {
    backgroundColor: `hsl(${hue}, 70%, 90%)`,
    color: `hsl(${hue}, 70%, 35%)`,
  }
}

const highlightCode = () => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })
}

onMounted(async () => {
  try {
    blog.value = await blogStore.fetchBlogById(route.params.id)
    await nextTick()
    highlightCode()
  } catch (e) {
    console.error('Error fetching blog:', e)
  }
})

watch(blog, async() => {
  await nextTick()
  highlightCode()
})

</script>

<template>

  <div class="blog-detail main__container">
    <!-- Loading State -->
    <Loader v-if="blogStore.isLoading" />
    <!-- Blog Content -->
    <article v-else-if="blog" class="blog-detail__article">
      <div class="blog-detail__header">
        <img class="blog-detail__cover" :src="blog.cover_image || defaultCover" alt="cover image" />
        <p class="blog-detail__date"> Posted on: {{ dayjs(blog.published_at).format('MMM D, YYYY') }}
          ({{ dayjs(blog.published_at).fromNow() }})</p>
        <h1 class="blog-detail__title">{{ blog.title }}</h1>
        <div class="blog-detail__tags">
          <span v-for="tag in blog.tags" :key="tag" class="blog-detail__tag" :style="getTagStyle(tag)">#{{tag}}</span>
        </div>
        <div class="blog-detail__meta">
          <div class="blog-detail__author">
            <img class="blog-detail__avatar" :src="blog.user.profile_image" alt="avatar" />
            <p class="blog-detail__username text-2xl font-semibold">{{ blog.user.name }}</p>
          </div>
          <div class="blog-detail__time-wrapper">
            <Icon name="clock" size="20" color="green" />
            <p class="blog-detail__time">{{ blog.reading_time_minutes }} min to read</p>
          </div>
        </div>
      </div>
      <div class="blog-detail__content">
        <div
          v-html="blog.body_html"
          class="blog-body prose prose-lg prose-slate max-w-none
               prose-headings:font-bold prose-headings:text-gray-900
               prose-h1:text-6xl prose-h2:text-5xl prose-h3:text-4xl
               prose-p:text-gray-700 prose-p:leading-relaxed
               prose-a:text-sky-600
               prose-strong:text-gray-900 prose-strong:font-semibold
               prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
               prose-img:rounded-lg prose-img:shadow-lg
               prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:italic
               prose-ul:list-disc prose-ol:list-decimal
               prose-li:text-gray-700"
        ></div>
        <div class="flex align-center justify-center gap-2 mt-20 ">
          <Icon name="heartHandshake" size="24" color="red"/>
          <p>Thanks to <a class="text-sky-600 hover:text-(--primary-color)" href="https://dev.to" target="_blank">Dev.to</a>
            — original post <a class="text-sky-600 hover:text-(--primary-color)" :href="blog.url" target="_blank">here</a>.</p>
        </div>
      </div>

    </article>
    <div v-else class="blog-detail__notfound text-center text-8xl text-pink-400 mt-10">
      Blog not found 😥
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <RouterLink to="/hubs/blogs/" class="rounded-md bg-(--primary-color) px-3.5 py-2.5 text-2xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back to Blog List</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-detail {
  margin-top: 120px;
}

.blog-detail__header {
  text-align: center;
}

.blog-detail__cover {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 10px;
}

.blog-detail__date {
  font-size: 1.5rem;
  color: var(--desc-color);
  margin-bottom: 10px;
  text-transform: uppercase;
}

.blog-detail__title {
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.blog-detail__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-top: 1px solid var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
  padding: 10px;
}

.blog-detail__author {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.blog-detail__avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.blog-detail__time-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.blog-detail__time {
  font-size: 1.5rem;
  color: gray;
}

.blog-detail__content {
  font-family: "Comic Sans MS", sans-serif;
}

.blog-detail__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.blog-detail__tag {
  border-radius: 9999px;
  padding: 4px 10px;
  font-weight: 600;
  font-size: 1.5rem;
  transition: all 0.2s ease;
}

/* Blog Body - Custom overrides cho Dev.to content */
.blog-body {
  line-height: 1.8;
  font-size: 18px;
}

.blog-body :deep(h1),
.blog-body :deep(h2),
.blog-body :deep(h3) {
  font-family: "DM Sans", sans-serif;
}

/* Fix cho code blocks từ Dev.to */
.blog-body :deep(pre) {
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 24px 0;
  background-color: #282c34;
}

.blog-body :deep(code) {
  font-family: 'JetBrains Mono', Courier, monospace;
  font-size: 1.5rem;
}

/* Fix cho images từ Dev.to */
.blog-body :deep(img) {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 24px auto;
}

/* Fix cho tables từ Dev.to */
.blog-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
}

.blog-body :deep(th),
.blog-body :deep(td) {
  padding: 12px;
  border: 1px solid #e3dede;
  text-align: left;
}

.blog-body :deep(th) {
  background-color: #dae9f4;
  font-weight: 600;
}

.blog-body :deep(a):hover {
  color: var(--primary-color);
}

.blog-body :deep(svg) {
  display: none;
}

/* Fix cho crayons-card c-embed từ Dev.to */

.blog-body :deep(.crayons-card.c-embed) {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 120px;
  padding: 20px;
  border: 1px solid var(--primary-color);
  border-radius: 10px;
  background: #f9f9f9;
}

.blog-body :deep(.c-embed__favicon) {
  display: none;
}

.blog-body :deep(.c-embed__content) {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.blog-body :deep(.c-embed__cover) {
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-body :deep(.c-embed__cover img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.blog-body :deep(.c-embed__body) {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.blog-body :deep(.c-embed__body h2) {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  line-height: 1.3;
}

.blog-body :deep(.c-embed__body .c-link) {
  font-size: 2.7rem;
  display: inline-block;
  font-weight: 700;
}

.blog-body :deep(.c-embed__body p) {
  font-size: 1.8rem;
  color: #171717;
  margin: 0;
}

.blog-body :deep(.c-embed__body div) {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: #737373;
}

.blog-body :deep(.ltag__link) {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  border: 1px solid var(--primary-color);
  background-color: #f9f9f9;
  border-radius: 4px;
}

.blog-body :deep(.ltag__link .ltag__link__pic) {
  display: inline-block;
  padding: 20px;
}

.blog-body :deep(.ltag__link img) {
  border-radius: 50%;
  width: 55px;
  height: 55px;
  max-width: 60px;
  max-height: 60px;
}

.blog-body :deep(.ltag__link .ltag__link__content) {
  display: inline-block;
  padding: 10px 10px 10px 0;
}

.blog-body :deep(.ltag__link .ltag__link__content h2) {
  display: inline-block;
  margin: 0;
  padding: 0;
  color: var(--primary-color);
  font-size: 3.1rem;
  line-height: 38px;
  font-weight: 700;
}

.blog-body :deep(.ltag__link .ltag__link__content h3) {
  margin: 4px 0;
  padding: 0;
  color: #a3a3a3;
  font-size: 1.4rem;
  line-height: 17px;
  font-weight: 500;
}

.blog-body :deep(.ltag__link .ltag__link__content .ltag__link__taglist) {
  margin-top: 10px;
  padding: 0;
  color: #8FBC94;
  font-size: 1.4rem;
  line-height: 14px;
  font-weight: 500;
}
</style>
