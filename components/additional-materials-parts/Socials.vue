<template>
  <div ref="socials" class="w-full h-full">
    <div class="flex flex-col h-full w-full">
      <div class="flex flex-col gap-y-6 socials">
        <a
          :class="visibleElems[0] ? 'animate-from-left' : 'opacity-0'"
          target="_blank"
          :href="config.discordLink"
        >
          <div class="socials-elem">
            <DiscordLogo class="w-11 h-11" />
            Discord Community
          </div>
        </a>
        <a
          :class="visibleElems[1] ? 'animate-from-left' : 'opacity-0'"
          target="_blank"
          :href="config.vkLink"
        >
          <div class="socials-elem">
            <VkLogo class="w-11 h-11" />
            ВКонтакте
          </div>
        </a>
        <a
          :class="visibleElems[2] ? 'animate-from-left' : 'opacity-0'"
          target="_blank"
          :href="config.telegramLink"
        >
          <div class="socials-elem">
            <TelegramLogo class="w-11 h-11" />
            Telegram
          </div>
        </a>
        <a
          :class="visibleElems[3] ? 'animate-from-left' : 'opacity-0'"
          target="_blank"
          :href="config.boostyLink"
        >
          <div class="socials-elem">
            <BoostyLogo class="w-11 h-11" />
            Бусти
          </div>
        </a>
      </div>
      <div
        class="text-primary flex flex-row mt-auto items-center text-2xl gap-6 mx-3"
      >
        <VillageIcon class="w-20 h-20" />
        <div>
          <h1 class="text-2xl">Наши Соц. Сети</h1>
          <h4 class="text-base text-secondary highlight-link">
            Здесь вы сможете спросить о вещах о сборке, или просто поговорить в
            <a>дружном коллективе</a>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.socials {
  a:hover {
    cursor: pointer;
  }
}

.socials-elem {
  @apply bg-block text-primary text-3xl flex flex-row h-18 items-center px-8 gap-x-8;
}

.highlight-link a {
  @apply text-primary;
}

@keyframes from-right {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-from-left {
  animation: from-right 1s ease-out forwards;
}
</style>

<script setup lang="ts">
import VillageIcon from '~/components/icons/VillageIcon.vue'
import DiscordLogo from '~/components/icons/DiscordLogo.vue'
import VkLogo from '~/components/icons/VkLogo.vue'
import TelegramLogo from '~/components/icons/TelegramLogo.vue'
import BoostyLogo from '~/components/icons/BoostyLogo.vue'
import config from '~/config'

import { useIntersectionObserver } from '@vueuse/core'

const socials = ref(null)
const visibleElems: Ref<number[]> = ref([])

useIntersectionObserver(
  socials,
  ([{ isIntersecting }]) => {
    if (visibleElems.value.length === 4) return
    if (isIntersecting) {
      const interval = setInterval(() => {
        visibleElems.value.push((visibleElems.value?.at(-1) ?? 0) + 1)
        if (visibleElems.value.length === 4) {
          clearInterval(interval)
        }
      }, 200)
    }
  },
  { threshold: 0.1 }
)
</script>
