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
      <div class="features-tiles w-full">
        <NewFeaturesTile class="weapons-bg">Новое оружие</NewFeaturesTile>
        <NewFeaturesTile class="bosses-bg">Новые боссы</NewFeaturesTile>
        <NewFeaturesTile wide class="features-bg">
          Новые механики
        </NewFeaturesTile>
        <NewFeaturesTile wide class="graphics-bg">
          Новая графика
        </NewFeaturesTile>
        <NewFeaturesTile class="locations-bg">Новые локации</NewFeaturesTile>
        <NewFeaturesTile class="rpg-bg">Реворк RPG системы</NewFeaturesTile>
      </div>
    </div>

    <div class="container mx-auto my-26 flex flex-col gap-8">
      <div class="rfad-styled-text-gradient text-3xl font-semibold">
        Почему RFAD?
      </div>
      <div class="why-we-tiles w-full">
        <WhyWeTile class="weapons-bg">Частые обновления</WhyWeTile>
        <WhyWeTile class="bosses-bg">Технологичность</WhyWeTile>
        <WhyWeTile class="features-bg">
          Множество дополнительного контента
        </WhyWeTile>
        <WhyWeTile class="graphics-bg">Лаунчер и простая установка</WhyWeTile>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
import Button from '~/components/Button.vue'
import NewFeaturesTile from '~/components/NewFeaturesTile.vue'
import WhyWeTile from '~/components/WhyWeTile.vue'
</script>

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
}

$gap: 24px;

/* === Секция «Новое виденье Скайрима» остаётся на flex === */
.features-tiles {
  display: flex;
  flex-wrap: wrap;
  gap: $gap;
}

.features-tiles > * {
  flex: 0 0 calc((75% - 2 * #{$gap}) / 3);
}

.features-tiles > .wide {
  flex: 0 0 calc(2 * ((50% - 2 * #{$gap}) / 2) + #{$gap});
}

.why-we-tiles {
  display: grid;
  gap: $gap;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'weapons   bosses    graphics'
    'mechanics mechanics graphics';
}

.why-we-tiles .weapons-bg {
  grid-area: weapons;
}
.why-we-tiles .bosses-bg {
  grid-area: bosses;
}
.why-we-tiles .features-bg {
  grid-area: mechanics;
}
.why-we-tiles .graphics-bg {
  grid-area: graphics;
  height: 100%;
}

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
