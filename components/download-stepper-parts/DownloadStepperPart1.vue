<template>
  <div>
    <div
      class="flex flex-col highlight-link items-center justify-center text-center"
    >
      <h1 class="text-primary text-6xl">1</h1>
      <h2 class="text-secondary text-2xl">
        Скачайте сборку:<br />
        <a :href="config.download.torrent">Torrent</a>
        или <a :href="config.download.yadisk">Yandex</a>
      </h2>

      <h6 class="text-secondary mt-3 text-base">
        <span class="opacity-50">
          Torrent рекомендуем скачивать используя
        </span>
        <a :href="config.qbit" class="opacity-75">QBit</a>
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
