<template>
  <div class="tile" :class="{ wide: props.wide }">
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
    bg-cover bg-center bg-no-repeat
    border border-tile-border;
}
</style>
