<template>
  <div>
    <div class="flex flex-col w-screen h-screen bg-black">
      <img
        src="assets/images/main-background.jpg"
        class="gradient"
        alt="background"
      />
    </div>
  </div>
</template>

<style lang="scss">
.gradient {
  z-index: 100;
  //-webkit-mask-image: linear-gradient(to top, transparent 2%, black 95%);
  -webkit-mask-image: linear-gradient(to top, transparent 2%, black 100%),
  radial-gradient(
          circle,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0) 100%
  ),;

  //-webkit-mask-image: radial-gradient(circle, hsl(0, 0, 40, 0) 0%, rgba(40, 13, 5, 1) 100%);
  //mask-image: radial-gradient(
  //  circle,
  //  hsl(0, 0, 40, 0) 0%,
  //  rgba(40, 13, 5, 1) 100%
  //);
}
</style>
