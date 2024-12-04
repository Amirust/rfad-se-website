<template>
  <div>
    <div class="w-svw h-svw">
      <div
        class="background bg-no-repeat bg-center bg-cover absolute top-0 left-0 w-full h-full"
      ></div>
      <div class="relative">
        <AppHeader class="pt-5 hidden md:flex" />
        <div
          class="flex flex-col w-full h-full justify-center mt-100 md:mt-100 items-center"
        >
          <div class="text-center text-primary font-serif leading-[64px]">
            <h1 class="text-5xl md:text-8xl font-black">Requiem For A Dream</h1>
            <h2 class="text-4xl md:text-5xl font-light">
              by Immersive Chicken
            </h2>
          </div>

          <PointIcon
            class="w-8 h-8 animate-bounce text-primary mt-80 md:hidden"
          />

          <div class="mx-5 gap-6 flex flex-col md:hidden mt-10">
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
              <BoostyLogo class="w-8 h-8 icon" />
              <DiscordLogo class="w-8 h-8 icon" />
              <TelegramLogo class="w-8 h-8 icon" />
              <VkLogo class="w-8 h-8 icon" />
            </div>
          </div>

          <div class="text-primary w-[46rem] h-72 hidden md:block mt-6">
            <div class="govno w-full h-full">
              <div
                class="main-block text-primary bg-no-repeat bg-center bg-cover bg-transparent w-full h-full flex"
              >
                <div class="mx-10 md:mx-18 gap-6 flex flex-col">
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
                    class="flex flex-row text-secondary justify-around md:mx-24"
                  >
                    <BoostyLogo class="w-8 h-8 icon" />
                    <DiscordLogo class="w-8 h-8 icon" />
                    <TelegramLogo class="w-8 h-8 icon" />
                    <VkLogo class="w-8 h-8 icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-56 mx-5 md:mx-24 lg:mx-40 xl:mx-80 2xl:mx-100 3xl:mx-120 text-secondary"
    >
      <div class="flex flex-col gap-2.5">
        <MainPageInfoHeader>
          <span>Почему мы?</span>
        </MainPageInfoHeader>
        <div class="w-full h-144 flex flex-col md:flex-row gap-12">
          <div class="md:w-[65%] h-full"><WhyWeBigComponent /></div>
          <div class="md:w-[35%] h-full"><WhyWeSmallComponent /></div>
        </div>
      </div>
      <div class="flex flex-col gap-2.5 mt-12">
        <MainPageInfoHeader>
          <span>А что с графикой?</span>
        </MainPageInfoHeader>
        <div class="w-full h-144 flex flex-col md:flex-row gap-12">
          <div class="md:w-[50%] h-full">
            <GraphicsShowcaseComponent
              icon="city"
              title="Графика с ENB"
              :description="'GTX 1660 (6 GB) & 4-Ядерный CPU\n1080p 60FPS - Medium/High BetIni'"
              background="enb"
            />
          </div>
          <div class="md:w-[50%] h-full">
            <GraphicsShowcaseComponent
              icon="village"
              title="Графика с ReShade"
              :description="'GTX 1060 (6 GB) & 4-Ядерный CPU\n1080p 60FPS - Medium/High BetIni'"
              background="reshade"
            />
          </div>
        </div>
      </div>
      <h1 class="text-center text-3xl mt-16 mb-56">Тут ещё будет говно</h1>
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
  transition: all 0.3s ease-in-out;
}

.govno {
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.1rem);
    .main-block {
      filter: drop-shadow(0 4px 200px rgba(191, 175, 143, 0.5));
    }
  }

  &:before {
    content: '';
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    position: absolute;
    top: auto;
    bottom: 1rem;
    left: 1rem;
    box-shadow: 0 0 0 2px #ffeabf;
  }
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
import BoostyLogo from '~/components/icons/BoostyLogo.vue'
import DiscordLogo from '~/components/icons/DiscordLogo.vue'
import TelegramLogo from '~/components/icons/TelegramLogo.vue'
import VkLogo from '~/components/icons/VkLogo.vue'
import PointIcon from '~/components/icons/PointIcon.vue'
</script>
