<template>
  <div>
    <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
      <Head>
        <Title>{{ title }}</Title>
        <Meta property="og:title" :content="title" />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="theme-color" :content="themeColor" />
        <Meta property="og:site_name" :content="brand" />
        <Meta property="og:type" content="website" />

        <Link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <Link
          rel="apple-touch-icon"
          type="image/svg+xml"
          sizes="any"
          href="/apple-touch-icon.svg"
        />
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

const head = useLocaleHead({
  dir: true,
  seo: true,
})
</script>

<style scoped></style>
