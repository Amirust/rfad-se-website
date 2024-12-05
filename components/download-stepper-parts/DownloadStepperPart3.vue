<template>
  <div>
    <div
      class="flex flex-col highlight-link items-center justify-center text-center"
    >
      <h1 class="text-primary text-6xl">3</h1>
      <h2 class="text-secondary text-2xl">Наслаждайтесь<br /><a>Игрой</a></h2>

      <h6 class="text-secondary mt-3 text-base">
        <span class="opacity-50">
          При возникновении вопросов, обращайтесь в
        </span>
        <a :href="config.discordLink" class="opacity-75">Discord</a>
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
