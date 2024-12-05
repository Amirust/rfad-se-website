<template>
  <div>
    <div class="w-svw h-svw">
      <div
        class="background bg-no-repeat bg-center bg-cover absolute top-0 left-0 w-full h-full"
      ></div>
      <div class="relative">
        <AppHeader class="pt-5 hidden md:flex" />
        <TitleComponent />
      </div>
    </div>
    <div
      class="mt-56 mb-24 mx-5 md:mx-24 lg:mx-40 xl:mx-80 2xl:mx-100 3xl:mx-120 text-secondary flex flex-col gap-20"
    >
      <WhyWeComponent />
      <IndexGraphicsShowcase />
      <IndexDownload />
      <IndexAdditionalMaterials />
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
import TitleComponent from '~/components/index/IndexTitle.vue'
import WhyWeComponent from '~/components/index/IndexWhyWe.vue'
import IndexAdditionalMaterials from '~/components/index/IndexAdditionalMaterials.vue'
</script>
