<template>
  <div
    class="flex flex-col w-full h-full justify-center mt-100 md:mt-100 items-center"
  >
    <div
      ref="title"
      :class="isTitleVisible ? 'animate-opacity' : 'opacity-0'"
      class="text-center text-primary font-serif leading-[64px]"
    >
      <h1 class="text-5xl md:text-8xl font-black">Requiem For A Dream</h1>
      <h2 class="text-4xl md:text-5xl font-light">by Immersive Chicken</h2>
    </div>

    <a href="#info">
      <PointIcon
        :class="isTitleVisible ? 'animate-opacity-and-bounce' : 'opacity-0'"
        class="w-8 h-8 animate-bounce text-primary mt-80 md:hidden"
      />
    </a>

    <div
      id="info"
      ref="blockMob"
      :class="isBlockMobVisible ? 'animate-opacity-and-fade' : 'opacity-0'"
      class="mx-5 gap-6 flex flex-col md:hidden mt-10"
    >
      <div class="mt-12 text-xl text-secondary h-fit span-medium">
        <span>RFAD SE</span> это сборка модификаций на базе моде
        <span>Requiem</span> для <span>Skyrim: Special Edition</span>. Она
        меняет множество аспектов оригинальной игры и хорошо дополняет игровой
        мир. Сделайте путешествие по миру Скайрима более <span>сложным</span>,
        <span>интересным</span> и <span>захватывающим</span>!
      </div>
      <hr class="border-primary h-3" />
      <div class="flex flex-row text-secondary justify-around md:mx-24">
        <a target="_blank" :href="config.boostyLink"
          ><BoostyLogo class="w-8 h-8 icon" />
        </a>
        <a target="_blank" :href="config.discordLink">
          <DiscordLogo class="w-8 h-8 icon" />
        </a>
        <a target="_blank" :href="config.telegramLink">
          <TelegramLogo class="w-8 h-8 icon" />
        </a>
        <a target="_blank" :href="config.vkLink">
          <VkLogo class="w-8 h-8 icon" />
        </a>
      </div>
    </div>

    <div
      ref="block"
      :class="isBlockVisible ? 'animate-opacity-and-fade' : 'opacity-0'"
      class="text-primary w-[46rem] h-72 hidden md:block mt-6"
    >
      <div class="govno w-full h-full">
        <div
          class="main-block text-primary bg-no-repeat bg-center bg-cover bg-transparent w-full h-full flex"
        >
          <div class="mx-10 md:mx-18 gap-6 flex flex-col">
            <div class="mt-12 text-xl text-secondary h-fit span-medium">
              <span>RFAD SE</span> это сборка модификаций на базе моде
              <span>Requiem</span> для <span>Skyrim: Special Edition</span>. Она
              меняет множество аспектов оригинальной игры и хорошо дополняет
              игровой мир. Сделайте путешествие по миру Скайрима более
              <span>сложным</span>, <span>интересным</span> и
              <span>захватывающим</span>!
            </div>
            <hr class="border-primary h-3" />
            <div class="flex flex-row text-secondary justify-around md:mx-24">
              <a target="_blank" :href="config.boostyLink"
                ><BoostyLogo class="w-8 h-8 icon" />
              </a>
              <a target="_blank" :href="config.discordLink">
                <DiscordLogo class="w-8 h-8 icon" />
              </a>
              <a target="_blank" :href="config.telegramLink">
                <TelegramLogo class="w-8 h-8 icon" />
              </a>
              <a target="_blank" :href="config.vkLink">
                <VkLogo class="w-8 h-8 icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes animate-opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-opacity {
  animation: animate-opacity 1.5s ease-out forwards;
}

@keyframes animate-opacity-and-fade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-opacity-and-fade {
  animation: animate-opacity-and-fade 3s ease-out forwards;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-opacity-and-bounce {
  animation:
    animate-opacity 1.5s ease-out forwards,
    bounce 1s infinite;
}
</style>

<script setup lang="ts">
import config from '~/config'
import PointIcon from '~/components/icons/PointIcon.vue'
import BoostyLogo from '~/components/icons/BoostyLogo.vue'
import TelegramLogo from '~/components/icons/TelegramLogo.vue'
import DiscordLogo from '~/components/icons/DiscordLogo.vue'
import VkLogo from '~/components/icons/VkLogo.vue'
import { useIntersectionObserver } from '@vueuse/core'

const title = ref(null)
const block = ref(null)
const blockMob = ref(null)
const isTitleVisible = ref(false)
const isBlockVisible = ref(false)
const isBlockMobVisible = ref(false)

useIntersectionObserver(
  title,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isTitleVisible.value = true
  },
  { threshold: 0.1 }
)

useIntersectionObserver(
  block,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isBlockVisible.value = true
  },
  { threshold: 0.1 }
)

useIntersectionObserver(
  blockMob,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isBlockMobVisible.value = true
  },
  { threshold: 0.1 }
)
</script>
