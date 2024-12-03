<template>
  <div class="w-full h-full show-text-on-hover">
    <div class="w-full h-full component-background bg-no-repeat bg-cover">
      <div class="flex h-full w-full flex-col">
        <div
          class="text-primary flex flex-row mt-auto items-center text-2xl gap-6"
        >
          <VerminaDaedraIcon class="w-16 h-16" />
          <div>
            <h1 class="text-2xl">Новый контент</h1>
            <h4 class="text-base text-secondary">
              Новые расы, данжи, броня, оружие, заклинания, мини/боссы, данжи,
            </h4>
          </div>
        </div>
        <div>
          <h4 class="only-on-hover text-base text-secondary ml-[62px]">
            крики, способности, квесты, глобальные локации, переработанная
            алхимия и много всего другого, созданного нашей командой!
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

.show-text-on-hover {
  position: relative;
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: drop-shadow(0 4px 50px rgba(191, 175, 143, 0.15));

    .only-on-hover {
      max-height: 230px;
      transform: scaleY(1);
      opacity: 1;
    }
  }
}

.only-on-hover {
  max-height: 0;
  opacity: 0;
  transform: scaleY(0);
  overflow: hidden;
  transform-origin: top;
  transition:
    max-height 0.5s ease,
    transform 0.5s ease,
    opacity 0.5s ease;
}
</style>
<script setup lang="ts">
import VerminaDaedraIcon from 'assets/icons/VerminaDaedraIcon.vue'
</script>
