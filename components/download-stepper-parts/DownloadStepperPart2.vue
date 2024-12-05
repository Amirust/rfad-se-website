<template>
  <div>
    <div
      class="flex flex-col highlight-link items-center justify-center text-center"
    >
      <h1 class="text-primary text-6xl">2</h1>
      <h2 class="text-secondary text-2xl">
        Установите патч:<br />
        <a :href="config.discordLink">Discord</a> или
        <a :href="config.download.googleLink">Google</a>
      </h2>

      <h6 class="text-secondary mt-3 text-base">
        <a :href="config.install.guide" class="opacity-75">Видео инструкция</a>
        <span class="opacity-50"> установки, чтобы вам было проще </span>
      </h6>
    </div>
  </div>
</template>

<style scoped lang="scss">
.highlight-link a {
  @apply text-primary;
}
</style>
<script setup lang="ts">
import config from '~/config'
</script>
