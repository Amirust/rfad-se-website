<template>
  <div
    class="container mx-auto w-[calc(100%-40px)] md:w-[calc(60%-40px)] text-primary h-full bg-footer-bg border border-1 border-b-0 rounded-t-md border-tile-border pt-6 pb-3 px-8 flex flex-col md:flex-row justify-between gap-y-4"
  >
    <div class="flex flex-col justify-between h-full w-full">
      <div class="flex flex-col">
        <div class="rfad-styled-text-gradient text-2xl font-bold">RFAD SE</div>
        <div class="text-white text-opacity-50 font-medium">
          Оригинал от Xandr,<br />
          реворк от Immersive Chicken.
        </div>
      </div>
      <div class="font-medium text-lg text-white text-opacity-50">
        Сайт был сделан:
        <span class="amirust-gradient">Amirust</span> &
        <span class="zodiac-gradient">Zodiac</span>
      </div>
    </div>

    <div class="flex flex-row justify-between w-full max-w-96">
      <div class="flex flex-col gap-2.5 w-52 md:w-full">
        <div>
          <div class="text-white text-opacity-50 font-semibold text-lg">
            Ресурсы
          </div>
        </div>
        <div class="text-white text-opacity-50 font-medium">
          <div><NuxtLink to="/download">Скачать RFAD</NuxtLink></div>
          <div><NuxtLink :to="config.patchnote">Патч ноут</NuxtLink></div>
          <div>
            <NuxtLink :to="config.googleTableLink">База Знаний</NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2.5 w-32 md:w-full">
        <div>
          <div class="text-white text-opacity-50 font-semibold text-lg">
            Соц. Сети
          </div>
        </div>
        <div class="text-white text-opacity-50 font-medium">
          <div>
            <NuxtLink as="div" :to="config.telegramLink">Telegram</NuxtLink>
          </div>
          <div><NuxtLink :to="config.discordLink">Discord</NuxtLink></div>
          <div><NuxtLink :to="config.vkLink">ВКонтакте</NuxtLink></div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-row-reverse md:flex-row justify-between w-full max-w-96"
    >
      <div class="flex flex-col gap-2.5 w-32 md:w-full">
        <div>
          <div class="text-white text-opacity-50 font-semibold text-lg">
            Поддержать
          </div>
        </div>
        <div class="text-white text-opacity-50 font-medium">
          <div><NuxtLink :to="config.boostyLink">Boosty</NuxtLink></div>
          <div><NuxtLink :to="config.patreonLink">Patreon</NuxtLink></div>
        </div>
      </div>

      <div class="flex flex-col gap-2.5 w-52 md:w-full">
        <div>
          <div class="text-white text-opacity-50 font-semibold text-lg">
            Особая благодарность
          </div>
        </div>
        <div class="text-white text-opacity-50 font-medium">
          <div>Akira Ray (Скриншоты)</div>
          <div>Nerury (Скриншоты)</div>
          <div>Hokuto no Ken (Скриншоты)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.amirust-gradient {
  background: linear-gradient(
      90deg,
      rgba(255, 46, 109, 75%) -50%,
      rgba(255, 234, 191, 75%) 150%
    ),
    linear-gradient(rgba(255, 255, 255, 50%), rgba(255, 255, 255, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.zodiac-gradient {
  background: linear-gradient(
      90deg,
      rgba(199, 105, 254, 50%) -50%,
      rgba(255, 0, 4, 50%) 200%
    ),
    linear-gradient(rgba(255, 255, 255, 50%), rgba(255, 255, 255, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

a {
  @apply transition-opacity duration-200;
  &:hover {
    @apply opacity-70;
  }
}
</style>
<script setup lang="ts">
import config from '~/config'
</script>
