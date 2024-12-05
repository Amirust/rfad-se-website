<template>
  <div
    ref="graphicsShowcase"
    :class="isVisible ? 'animate-fade-in' : 'opacity-0'"
    class="flex flex-col gap-2.5"
  >
    <MainPageInfoHeader>
      <span>А что с графикой?</span>
    </MainPageInfoHeader>
    <div class="w-full h-144 flex flex-col md:flex-row gap-12">
      <div class="md:w-[50%] h-full">
        <GraphicsShowcaseComponent
          icon="city"
          title="Графика с ENB"
          :description="'RTX 2060 (6 GB) & 4-Ядерный CPU\n1080p 60FPS - Medium/High BetIni'"
          background-type="enb"
        />
      </div>
      <div class="md:w-[50%] h-full">
        <GraphicsShowcaseComponent
          icon="village"
          title="Графика с ReShade"
          :description="'GTX 1060 (6 GB) & 4-Ядерный CPU\n1080p 60FPS - Medium/High BetIni'"
          background-type="reshade"
        />
      </div>
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

const graphicsShowcase = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  graphicsShowcase,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible.value = true
  },
  { threshold: 0.2 }
)
</script>
