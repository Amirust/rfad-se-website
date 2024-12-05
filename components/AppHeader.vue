<template>
  <div
    ref="container"
    :class="[
      'flex flex-row mx-12 lg:mx-52 xl:mx-72 2xl:mx-112 3xl:mx-132 justify-between font-header text-3xl items-center text-primary',
      isVisible ? 'animate-fade-in' : 'opacity-0',
    ]"
  >
    <a href="#download" class="text-center clickable">СКАЧАТЬ</a>
    <div><AppLogo class="h-16" /></div>
    <a
      target="_blank"
      :href="config.googleTableLink"
      class="text-center clickable"
    >
      БАЗА ЗНАНИЙ
    </a>
  </div>
</template>

<script setup lang="ts">
import AppLogo from '~/components/icons/AppLogo.vue'
import config from '~/config'
import { useIntersectionObserver } from '@vueuse/core'

const container = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  container,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible.value = true
  },
  { threshold: 0.1 }
)
</script>

<style scoped lang="scss">
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
</style>
