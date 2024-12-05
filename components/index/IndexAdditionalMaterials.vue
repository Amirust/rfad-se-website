<template>
  <div
    ref="additionalMaterialsRef"
    :class="isVisible ? 'animate-fade-in' : 'opacity-0'"
    class="flex flex-col gap-2.5 h-full"
  >
    <MainPageTwoSidesHeader>
      <span>Дополнительные Материалы</span>
    </MainPageTwoSidesHeader>
    <AdditionalMaterials />
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

const additionalMaterialsRef = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  additionalMaterialsRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible.value = true
  },
  { threshold: 0.1 }
)
</script>
