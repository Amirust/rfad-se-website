<template>
  <div class="w-full h-full">
    <div
      class="flex flex-col md:flex-row items-center md:justify-between md:gap-0 gap-12"
    >
      <DownloadStepperPart1 class="max-w-52" />
      <PointIcon class="w-8 h-8 md:rotate-[-90deg] text-primary" />
      <DownloadStepperPart2 class="max-w-52" />
      <PointIcon class="w-8 h-8 md:rotate-[-90deg] text-primary" />
      <DownloadStepperPart3 class="max-w-52" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.highlight-link a {
  @apply text-primary;
}
</style>
<script setup lang="ts">
import PointIcon from '~/components/icons/PointIcon.vue'
import DownloadStepperPart1 from '~/components/download-stepper-parts/DownloadStepperPart1.vue'
import DownloadStepperPart2 from '~/components/download-stepper-parts/DownloadStepperPart2.vue'
import DownloadStepperPart3 from '~/components/download-stepper-parts/DownloadStepperPart3.vue'
</script>
