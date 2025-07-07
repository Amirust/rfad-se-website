<script setup lang="ts">
const props = defineProps<{
  id: number
  current: number
}>()
</script>

<template>
  <div
    :class="{
      'bg-primary text-black border-primary':
        props.id === props.current || props.current > props.id,
      'bg-secondary-transparent text-secondary border-secondary':
        props.id !== props.current && props.current < props.id,
    }"
    class="w-7 h-7 max-h-7 rounded-md border-2 flex items-center justify-center pl-[1px] uppercase font-normal transition-colors select-none"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
