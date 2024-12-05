<template>
  <div
    ref="download"
    id="download"
    :class="isVisible ? 'animate-fade-in' : 'opacity-0'"
    class="flex flex-col gap-2.5"
  >
    <MainPageTwoSidesHeader>
      <span>Скачать</span>
    </MainPageTwoSidesHeader>
    <DownloadStepper />
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

const download = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  download,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible.value = true
  },
  { threshold: 0.2 }
)
</script>
