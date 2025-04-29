<script setup lang="ts"></script>

<template>
  <div
    class="container mx-auto flex flex-row justify-between items-center py-8"
  >
    <div>
      <NuxtLink
        to="/"
        class="text-3xl font-bold text-primary tracking-wide hover:text-opacity-75 hover:cursor-pointer transition-all duration-200"
      >
        RFAD SE
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/download">
        <div
          class="text-2xl font-normal uppercase text-white-transparent tracking-wide hover:opacity-80 hover:cursor-pointer transition-all duration-200"
        >
          Скачать
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
