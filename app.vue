<template>
  <NuxtLayout>
    <div>
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
.transition-page-enter-active,
.transition-page-leave-active {
  transition: 0.25s;
  transform-origin: center 96px;
}
.transition-page-leave-active {
  position: relative;
}
.transition-page-enter-from {
  opacity: 0;
  transform: scale(0.99);
}
.transition-page-leave-to {
  opacity: 0;
}
</style>
