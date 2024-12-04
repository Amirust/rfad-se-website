<template>
  <div class="w-full h-full component-background bg-no-repeat bg-cover">
    <div class="flex h-full w-full">
      <div
        class="text-primary flex flex-row mt-auto items-center text-2xl gap-6 mx-3"
      >
        <SkyrimDragonIcon class="w-16 h-16 mb-auto md:mb-0" />
        <div>
          <h1 class="text-2xl">Радикальные изменения геймплея</h1>
          <h4 class="text-base text-secondary">
            Мы создали уникальные ветви судьбы которые кардинально расширяют
            систему билдо-образования
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.component-background {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.72) 85%,
      rgba(0, 0, 0, 1) 100%
    ),
    url('assets/images/why-we-fate-routes.png');
}
</style>
<script setup lang="ts">
import SkyrimDragonIcon from '~/components/icons/SkyrimDragonIcon.vue'
</script>
