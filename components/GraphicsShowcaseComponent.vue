<template>
  <div
    :class="{
      'component-background-enb': props.background === 'enb',
      'component-background-reshade': props.background === 'reshade',
    }"
    class="w-full h-full component-background bg-no-repeat bg-center bg-cover"
  >
    <div class="flex h-full w-full">
      <div
        class="text-primary flex flex-row mt-auto items-center text-2xl gap-6 mx-3"
      >
        <WindhelmCityIcon v-if="props.icon === 'city'" class="w-16 h-16" />
        <VillageIcon v-else class="w-16 h-16" />
        <div>
          <h1 class="text-2xl">{{ props.title }}</h1>
          <h4 class="text-base text-secondary whitespace-pre">
            {{ props.description }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.component-background {
  &-enb {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.72) 85%,
        rgba(0, 0, 0, 1) 100%
      ),
      url('assets/images/main-background.webp');
  }

  &-reshade {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.72) 85%,
        rgba(0, 0, 0, 1) 100%
      ),
      url('assets/images/main-background.webp');
  }
}
</style>

<script setup lang="ts">
import type GraphicsShowcaseProps from '~/types/GraphicsShowcaseProps'
import WindhelmCityIcon from '~/components/icons/WindhelmCityIcon.vue'
import VillageIcon from '~/components/icons/VillageIcon.vue'

const props = defineProps<GraphicsShowcaseProps>()
</script>
