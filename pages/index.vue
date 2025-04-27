<template>
  <div>
    <div class="bg text-white">
      <NavBar />
      <div class="container mx-auto flex flex-col gap-1.5 my-96">
        <div class="font-semibold rfad-styled-text-gradient">
          <div class="text-6xl">Requiem For A Dream</div>
          <div class="text-3xl ml-[3px] mt-[-0.3rem] tracking-wide">
            by Immersive Chicken
          </div>
        </div>
        <div class="text-brand-white font-semibold text-xl max-w-120">
          RFAD SE — это передовая и технологичная Skyrim сборка на основе
          глобального мода Requiem.
        </div>
        <div class="flex flex-row gap-5 mt-3.5">
          <Button to="/download">Узнать больше</Button>
          <Button to="/download">Скачать</Button>
        </div>
      </div>
      <div class="opacity-0">Text for normal margin =) Hello</div>
    </div>
    <div class="container mx-auto my-26 flex flex-col gap-8">
      <div class="rfad-styled-text-gradient text-3xl font-semibold">
        Новое виденье Скайрима
      </div>
      <div class="tiles w-full">
        <WhyWeTile class="weapons-bg">Новое оружие</WhyWeTile>
        <WhyWeTile class="bosses-bg">Новые боссы</WhyWeTile>
        <WhyWeTile wide class="features-bg"> Новые механики </WhyWeTile>
        <WhyWeTile wide class="graphics-bg">Новая графика</WhyWeTile>
        <WhyWeTile class="locations-bg">Новые локации</WhyWeTile>
        <WhyWeTile class="rpg-bg"> Реворк RPG системы </WhyWeTile>
      </div>
    </div>
    <div class="container mx-auto my-26 flex flex-col gap-8">
      <div class="rfad-styled-text-gradient text-3xl font-semibold">
        Новое виденье Скайрима
      </div>
      <div class="tiles w-full">
        <WhyWeTile class="weapons-bg">Новое оружие</WhyWeTile>
        <WhyWeTile class="bosses-bg">Новые боссы</WhyWeTile>
        <WhyWeTile wide class="features-bg"> Новые механики </WhyWeTile>
        <WhyWeTile wide class="graphics-bg">Новая графика</WhyWeTile>
        <WhyWeTile class="locations-bg">Новые локации</WhyWeTile>
        <WhyWeTile class="rpg-bg"> Реворк RPG системы </WhyWeTile>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bg {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 90%,
      black 100%
    ),
    url('assets/images/MainBG.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.rfad-styled-text-gradient {
  background: linear-gradient(
      173.737deg,
      rgba(13, 12, 10, 0%) 0%,
      #9d7f6d 100%
    ),
    linear-gradient(#ffeabf, #ffeabf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

$gap: 24px;

.tiles {
  display: flex;
  flex-wrap: wrap;
  gap: $gap;
}

.tiles > * {
  flex: 0 0 calc((75% - 2 * #{$gap}) / 3);
}

.tiles > .wide {
  flex: 0 0 calc(2 * ((50% - 2 * #{$gap}) / 2) + #{$gap});
}

/* бэкграунды */
.weapons-bg {
  background-image: url('assets/images/NewWeapons.webp');
}
.bosses-bg {
  background-image: url('assets/images/NewBosses.webp');
}
.features-bg {
  background-image: url('assets/images/NewFeatures.webp');
}
.graphics-bg {
  background-image: url('assets/images/NewGraphics.webp');
}
.locations-bg {
  background-image: url('assets/images/NewLocations.webp');
}
.rpg-bg {
  background-image: url('assets/images/RPGRework.webp');
}
</style>

<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
import Button from '~/components/Button.vue'
import WhyWeTile from '~/components/WhyWeTile.vue'
</script>
