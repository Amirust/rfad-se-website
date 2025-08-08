<template>
  <div>
    <Html lang="ru" class="no-scrollbar">
      <Head>
        <Title>{{ title }}</Title>
        <Meta property="og:title" :content="title" />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="theme-color" :content="themeColor" />
        <Meta property="og:site_name" :content="brand" />
        <Meta property="og:type" content="website" />

        <Link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Body class="bg-black">
        <slot />
      </Body>
    </Html>
  </div>
</template>

<script setup lang="ts">
import { isBrowser } from '~/utils/isBrowser.util'

const brand = 'RFAD SE'
const title = `${brand} by Immersive Chicken`
const themeColorBrowser = '#0D0C0A'
const themeColorServer = '#0D0C0A'

const themeColor = computed(() => {
  return isBrowser() ? themeColorBrowser : themeColorServer
})
</script>

<style scoped></style>
