<template>
  <a class="w-full h-full">
    <div
      class="w-full h-full component-background bg-no-repeat bg-center bg-cover"
    >
      <div class="flex h-full w-full">
        <div
          class="text-primary flex flex-row mt-auto items-center text-2xl gap-6 mx-3"
        >
          <HermeusMoraIcon class="w-32 h-fit" />
          <div>
            <h1 class="text-2xl">База знаний</h1>
            <h4 class="text-base text-secondary highlight-link">
              Здесь собраны все новые вещи, локации, боссы и много другого, это
              - наша <a>энциклопедия</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped lang="scss">
.component-background {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.72) 85%,
      rgba(0, 0, 0, 1) 100%
    ),
    url('assets/images/knowledge-background.jpg');
}

.highlight-link a {
  @apply text-primary;
}
</style>

<script setup lang="ts">
import HermeusMoraIcon from '~/components/icons/HermeusMoraIcon.vue'
</script>
