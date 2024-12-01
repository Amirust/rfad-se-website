<template>
  <div class="bg-black">
    <div class="w-screen h-screen">
      <div
        class="background bg-no-repeat bg-center bg-cover absolute top-0 left-0 w-screen h-screen"
      ></div>
      <div class="relative">
        <AppHeader class="pt-5" />
        <div
          class="flex flex-col w-full h-full justify-center mt-112 items-center"
        >
          <div class="text-center text-primary font-serif">
            <h1 class="text-8xl font-black">Requiem For A Dream</h1>
            <h2 class="text-5xl font-black">by Immersive Chicken</h2>
          </div>

          <div class="text-primary w-[46rem] h-72 mt-6">
            <div class="govno w-full h-full">
              <div
                class="main-block text-primary bg-no-repeat bg-center bg-cover bg-transparent w-full h-full flex"
              >
                <div class="mx-18 gap-6 flex flex-col">
                  <div class="mt-12 text-xl text-secondary h-fit span-medium">
                    <span>RFAD SE</span> это сборка модификаций на базе моде
                    <span>Requiem</span> для
                    <span>Skyrim: Special Edition</span>. Она меняет множество
                    аспектов оригинальной игры и хорошо дополняет игровой мир.
                    Сделайте путешествие по миру Скайрима более
                    <span>сложным</span>, <span>интересным</span> и
                    <span>захватывающим</span>!
                  </div>
                  <hr class="border-primary h-3" />
                  <div
                    class="flex flex-row text-secondary justify-around mx-24"
                  >
                    <BoostyLogo class="w-8 h-8" />
                    <DiscordLogo class="w-8 h-8" />
                    <TelegramLogo class="w-8 h-8" />
                    <VkLogo class="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.background {
  background-image: url('assets/images/main-background.webp');
  mask-image: radial-gradient(
    circle at 50%,
    rgba(102, 102, 102, 1) 0%,
    rgba(0, 0, 0, 0) 85%
  );
}

.main-block {
  background-image: url('assets/images/main-block.svg');
  filter: drop-shadow(0 4px 200px rgba(255, 234, 191, 0.5));
}

.govno {
  position: relative;
}

.govno:before {
  content: '';
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  position: absolute;
  top: auto;
  bottom: 1rem;
  left: 1rem;
  box-shadow: 0 0 0 2px #ffeabf;
}

.span-medium {
  span {
    @apply font-medium text-primary;
  }
}

@screen sm {
  // Mobile
  .background {
    mask-image: radial-gradient(
      circle at 50%,
      rgba(102, 102, 102, 1) 0%,
      rgba(0, 0, 0, 0) 90%
    );
  }
}

@screen md {
  // Tablet
  .background {
    mask-image: radial-gradient(
      circle at 50%,
      rgba(102, 102, 102, 1) 0%,
      rgba(0, 0, 0, 0) 95%
    );
  }
}

@screen lg {
  // Desktop
  .background {
    mask-image: radial-gradient(
      circle at 50%,
      rgba(102, 102, 102, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
}
</style>
<script setup lang="ts">
import BoostyLogo from 'assets/icons/BoostyLogo.vue'
import DiscordLogo from 'assets/icons/DiscordLogo.vue'
import TelegramLogo from 'assets/icons/TelegramLogo.vue'
import VkLogo from 'assets/icons/VkLogo.vue'
</script>
