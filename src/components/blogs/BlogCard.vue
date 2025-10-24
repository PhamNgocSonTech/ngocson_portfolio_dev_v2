<script setup>
import Icon from '@/components/Icon.vue'
import DemoAvatar from '/src/assets/img/uifaces-cartoon-avatar.jpg'
defineProps({
  blog: {
    type: Object,
  }
})
</script>

<template>
  <RouterLink to="`/blog/${blog.id}`" class="blog__item-link">
    <article class="blog__item">
      <div class="blog__item-content">
        <img :src="blog.coverImg" alt="" class="blog__item-cover" />
        <span class="blog__item-title line-clamp-1 leading-tight">{{blog.title}}</span>
        <p class="blog__item-desc line-clamp-3 leading-relaxed">{{blog.desc}}</p>
      </div>
      <div class="blog__item-media">
        <div class="blog__item-info">
          <img :src="DemoAvatar" alt="" class="blog__item-avatar" />
          <div class="blog__item-text">
            <p class="blog__item-author">Michael Foster</p>
            <p class="blog__item-date">Posted on: 21/10/2025</p>
          </div>
        </div>
        <div class="blog__item-read">
          <Icon name="bookOpenCheck" size="20" color="green"/>
          <span class="blog__item-time">
            5 min read
          </span>
        </div>
      </div>
    </article>
  </RouterLink>

</template>

<style scoped>


.blog__item {
  background-color: #eae6ff;
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
  margin-top: 16px;
}

.blog__item:hover {
  transform: translateY(-10px);
}

.blog__item-cover {
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
}

.blog__item-title {
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
}

.blog__item-desc {
  font-size: 1.6rem;
  margin-top: 2rem;
}

.blog__item-media {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
}

.blog__item-info {
  display: flex;
  align-items: center;
  gap: 6px;
}

.blog__item-avatar {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.blog__item-author {
  font-size: 1.5rem;
  font-weight: bold;
}

.blog__item-date {
  font-size: 1.4rem;
  color: dimgray;
}

.blog__item-read {
  display: flex;
  align-items: center;
  gap: 6px;
}

@media (max-width: 576px) {
  .blog__item-read {
    font-size: 1.4rem;
  }
  .blog__item-time {
    white-space: nowrap; /* không cho xuống dòng */
  }
}
</style>
