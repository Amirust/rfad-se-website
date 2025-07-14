<script setup lang="ts">
export interface ButtonProps {
  to: string
}

const props = defineProps<ButtonProps>()
</script>

<template>
  <div
    class="bg-block border border-block-border md:px-8 px-5 py-2.5 w-fit rounded-md hover:opacity-85 hover:cursor-pointer transition-all duration-200 active:scale-95"
  >
    <NuxtLink
      :to="props.to"
      class="text-block-inner-text uppercase font-bold tracking-wider text-lg"
    >
      <slot />
    </NuxtLink>
  </div>
</template>

<style scoped></style>
