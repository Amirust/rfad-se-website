<template>
  <div
    ref="whyWeObject"
    :class="isVisible ? 'animate-fade-in' : 'opacity-0'"
    class="flex flex-col gap-2.5"
  >
    <MainPageInfoHeader>
      <span>Почему мы?</span>
    </MainPageInfoHeader>
    <div class="w-full h-144 flex flex-col md:flex-row gap-12">
      <div class="md:w-[65%] h-full"><WhyWeBigComponent /></div>
      <div class="md:w-[35%] h-full"><WhyWeSmallComponent /></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
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

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const whyWeObject = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  whyWeObject,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible.value = true
  },
  { threshold: 0.2 }
)
</script>
