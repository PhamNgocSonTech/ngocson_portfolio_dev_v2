<script setup>
</script>

<template>
  <!-- My Skill -->
  <section id="skill" class="skill">
    <div class="main__container">
      <div class="skill__content">
        <h2 class="skill__heading heading">My Skills</h2>
        <p class="skill__desc">Technologies and frameworks I use in development.</p>
      </div>
      <div class="row skill__columns">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="skill__column skill__column--frontend">
            <h3 class="skill__title">Frontend</h3>
            <ul class="skill__list">
              <li class="skill__item">HTML/CSS</li>
              <li class="skill__item">Javascript</li>
              <li class="skill__item">Sass</li>
              <li class="skill__item">VueJS</li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="skill__column skill__column--backend">
            <h3 class="skill__title">Backend</h3>
            <ul class="skill__list">
              <li class="skill__item">NodeJS</li>
              <li class="skill__item">ExpressJS</li>
              <li class="skill__item">MongoDB</li>
              <li class="skill__item">SQL</li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="skill__column skill__column--tool">
            <h3 class="skill__title">Tools</h3>
            <ul class="skill__list">
              <li class="skill__item">Postman</li>
              <li class="skill__item">Vercel</li>
              <li class="skill__item">Cloudinary</li>
              <li class="skill__item">AI</li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="skill__column skill__column--erp">
            <h3 class="skill__title">ERP</h3>
            <ul class="skill__list">
              <li class="skill__item">Odoo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.skill {
  margin-top: 160px;
}

.skill__content {
  max-width: 528px;
  margin: 0 auto;
}

.skill__heading {
  font-size: 5.6rem;
  line-height: 1.18; /* 117.857% */
  letter-spacing: -2.24px;
  text-align: center;
  margin-bottom: 20px;
}

.skill__desc {
  color: var(--desc-color);
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.67; /* 166.667% */
  margin-bottom: 30px;
}


.skill__column {
  padding: 30px 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(93, 59, 238, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(93, 59, 238, 0.06);
}

.skill__column:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(93, 59, 238, 0.15);
  border-color: rgba(93, 59, 238, 0.12);
}

.skill__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 25px;
  position: relative;
}

.skill__title::after {
  content: "";
  width: 40px;
  height: 3px;
  background: var(--primary-color);
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

.skill__list {
  list-style: none;
}

.skill__item {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--desc-color);
  margin-bottom: 15px;
  padding: 12px 16px;
  background: rgba(93, 59, 238, 0.04);
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.skill__item:last-child {
  margin-bottom: 0;
}

.skill__item:hover {
  background: rgba(93, 59, 238, 0.08);
  color: var(--heading-color);
  transform: scale(1.02);
}

</style>
