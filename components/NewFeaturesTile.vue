<template>
  <div class="tile bg-cover 2xl:bg-100%" :class="{ wide: props.wide }">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  wide?: boolean
}>()
</script>

<style lang="scss">
.tile {
  @apply h-52
  flex items-end justify-center pb-2.5
  text-white-transparent
  font-semibold
  text-lg
  rounded-md
  bg-center bg-no-repeat
  border border-tile-border;

  transition: background-size 0.3s ease-in-out;
  background-size: cover;

  &:hover {
    @media (min-width: 1536px) {
      background-size: 103%;
    }
  }

  @media (min-width: 1536px) {
    background-size: 100%;
  }
}
</style>
