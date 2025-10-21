<script setup></script>

<template>
  <div class="blog main__container">
    <div class="mt-60 text-center">
      <h2 class="font-bold text-8xl text-(--primary-color)">From the blog</h2>
      <p class="text-4xl mt-4 text-(--desc-color)">
        Learn how to grow your business with our expert advice.
      </p>
    </div>
    <div class="blog__list">
      <div class="blog__item">
        <div class="blog__item-content">
          <img src="../assets/img/demo-cover-blog.webp" alt="" class="blog__item-cover" />
          <span class="blog__item-title">Boost your conversion rate</span>
          <p class="blog__item-desc">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non
            aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla
            deserunt vel. Iusto corrupti dicta.
          </p>
        </div>
        <div class="blog__item-media">
          <img src="../assets/img/uifaces-cartoon-avatar.jpg" alt="" class="blog__item-avatar" />
          <div class="blog__item-info">
            <p class="blog__item-author">Michael Foster</p>
            <p class="blog__item-date">21/10/2025</p>
          </div>
        </div>
      </div>

      <div class="blog__item">
        <div class="blog__item-content">
          <img src="../assets/img/demo-cover-blog.webp" alt="" class="blog__item-cover" />
          <span class="blog__item-title">Boost your conversion rate</span>
          <p class="blog__item-desc">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non
            aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla
            deserunt vel. Iusto corrupti dicta.
          </p>
        </div>
        <div class="blog__item-media">
          <img src="../assets/img/uifaces-cartoon-avatar.jpg" alt="" class="blog__item-avatar" />
          <div class="blog__item-info">
            <p class="blog__item-author">Michael Foster</p>
            <p class="blog__item-date">21/10/2025</p>
          </div>
        </div>
      </div>

      <div class="blog__item">
        <div class="blog__item-content">
          <img src="../assets/img/demo-cover-blog.webp" alt="" class="blog__item-cover" />
          <span class="blog__item-title">Boost your conversion rate</span>
          <p class="blog__item-desc">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non
            aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla
            deserunt vel. Iusto corrupti dicta.
          </p>
        </div>
        <div class="blog__item-media">
          <img src="../assets/img/uifaces-cartoon-avatar.jpg" alt="" class="blog__item-avatar" />
          <div class="blog__item-info">
            <p class="blog__item-author">Michael Foster</p>
            <p class="blog__item-date">21/10/2025</p>
          </div>
        </div>
      </div>

      <div class="blog__item">
        <div class="blog__item-content">
          <img src="../assets/img/demo-cover-blog.webp" alt="" class="blog__item-cover" />
          <span class="blog__item-title">Boost your conversion rate</span>
          <p class="blog__item-desc">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non
            aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla
            deserunt vel. Iusto corrupti dicta.
          </p>
        </div>
        <div class="blog__item-media">
          <img src="../assets/img/uifaces-cartoon-avatar.jpg" alt="" class="blog__item-avatar" />
          <div class="blog__item-info">
            <p class="blog__item-author">Michael Foster</p>
            <p class="blog__item-date">21/10/2025</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog__list {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.blog__item {
  background-color: #d6d3e2;
  border-radius: 10px;
  padding: 20px;
}

.blog__item-title {
  font-size: 2rem;
  font-weight: bold;
}

.blog__item-desc {
  font-size: 1.6rem;
  line-height: 1.5;
  white-space: wrap;
  margin-bottom: 10px;
}

.blog__item-media {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: row;
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
</style>
