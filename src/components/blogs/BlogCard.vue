<script setup>
import Icon from '@/components/Icon.vue'
import DemoAvatar from '/src/assets/img/uifaces-cartoon-avatar.jpg'
import defaultCover from '/src/assets/img/image-not-found.svg'
defineProps({
  blogProps: {
    type: Object,
  }
})
</script>

<template>
  <RouterLink to="`/blogs/${blogProps.id}`" class="blog__item-link">
    <article class="blog__item">
      <div class="blog__item-content">
        <img :src="blogProps.cover_image || defaultCover" alt="" class="blog__item-cover" />
        <span class="blog__item-title leading-tight">{{blogProps.title}}</span>
        <p class="blog__item-desc line-clamp-3 leading-relaxed">{{blogProps.description}}</p>
      </div>
      <div class="blog__item-media">
        <div class="blog__item-info">
          <img :src="blogProps.user.profile_image" alt="" class="blog__item-avatar" />
          <div class="blog__item-text">
            <p class="blog__item-author line-clamp-2">{{blogProps.user.name}}</p>
            <p class="blog__item-date">Posted on: {{blogProps.readable_publish_date}}</p>
          </div>
        </div>
        <div class="blog__item-read">
          <Icon name="bookOpenCheck" size="20" color="green"/>
          <span class="blog__item-time">
            {{blogProps.reading_time_minutes}} min read
          </span>
        </div>
      </div>
    </article>
  </RouterLink>

</template>

<style scoped>
.blog__item {
  display: flex;
  flex-direction: column;
  background-color: #eae6ff;
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
  height: 100%;
}

.blog__item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

}

.blog__item-cover {
  width: 100%;
  height: 200px;
  border-radius: 6px;
  object-fit: cover;
}

.blog__item-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.blog__item-title {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.blog__item-desc {
  font-size: 1.6rem;
  margin-top: 2rem;
  flex: 1;
}

.blog__item-media {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 255, 0.18);
}

.blog__item-info {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

.blog__item-avatar {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
}

.blog__item-text {
  min-width: 0;
}

.blog__item-author {
  font-size: 1.5rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.blog__item-date {
  font-size: 1.4rem;
  color: dimgray;
}

.blog__item-read {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

@media (max-width: 576px) {
  .blog__item-read {
    font-size: 1.4rem;
  }
  .blog__item-time {
    white-space: nowrap;
  }
}
</style>
