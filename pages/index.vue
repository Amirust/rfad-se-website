<template>
  <div>
    <h1 class="main h-screen"></h1>
  </div>
</template>

<style lang="scss">
.main {
  background: image('assets/images/MainBg.jpg'),
    linear-gradient(to bottom, hsl(0, 0, 0) 0%, hsl(0, 0, 0) 100%),
    radial-gradient(circle, hsl(0, 0, 40, 0) 0%, rgba(40, 13, 5, 1) 100%),
    hsl(40, 13, 5, 25%);
  background-blend-mode: normal, normal, normal, normal;
}
</style>
