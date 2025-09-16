<script setup>
import { ref } from 'vue'

import StaticProps from '@/components/StaticProps.vue'
import DynamicProps from '@/components/DynamicProps.vue'
import ChangingProps from '@/components/ChangingProps.vue'
import SlotComponent from '@/components/SlotComponent.vue'
// import FallbackContent from '@/components/FallbackContent.vue'

const firstName = ref('Jane')
const lastName = ref('Doe')
const myNumber = 7;

</script>

<template>
<!--  <h1>You did it!</h1>-->
<!--  <p>-->
<!--    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the-->
<!--    documentation-->
<!--  </p>-->
<!--  <StaticProps name="ngocson"/>-->
<!--  <DynamicProps-->
<!--    :firstName="firstName"-->
<!--    :lastName="lastName"-->
<!--  />-->
<!--  <ChangingProps :myNumber="myNumber"/>-->
<!--  <SlotComponent>-->
<!--    <p>Content 1</p>-->
<!--    <p>Content 2</p>-->
<!--  </SlotComponent>-->

  <FallbackContent></FallbackContent>
</template>

<style scoped></style>
