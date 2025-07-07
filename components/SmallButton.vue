<script setup lang="ts">
export interface ButtonProps {
  to: string
}

const props = defineProps<ButtonProps>()
</script>

<template>
  <div
    class="bg-block border border-block-border px-4 py-2 w-fit rounded-md hover:opacity-85 hover:cursor-pointer transition-all duration-200"
  >
    <NuxtLink
      :to="props.to"
      class="text-block-inner-text uppercase font-semibold tracking-wider text-sm"
    >
      <slot />
    </NuxtLink>
  </div>
</template>

<style scoped></style>
