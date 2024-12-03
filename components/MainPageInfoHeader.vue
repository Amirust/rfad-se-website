<script setup lang="ts">
import DiamondIcon from 'assets/icons/DiamondIcon.vue'
</script>

<template>
  <div class="flex flex-row gap-2.5 text-primary items-center">
    <DiamondIcon class="w-7 h-9" />
    <span class="font-sans text-3xl min-w-max"><slot /></span>
    <hr class="border-primary styled-hr w-full h-12" />
  </div>
</template>

<style scoped lang="scss">
.styled-hr {
  position: relative;
  border-width: 0;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    border-width: 1px;
    @apply border-primary w-full;
  }
  &:after {
    content: '';
    position: absolute;
    top: 53%;
    right: 1px;
    transform: translateY(-50%) rotate(45deg);
    width: 7px;
    height: 7px;
    @apply bg-primary;
  }
}
</style>
