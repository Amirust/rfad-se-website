<template>
  <Html lang="ru" class="no-scrollbar">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" content="RFAD SE - Новый взгляд на Skyrim." />
      <Meta property="og:title" :content="title" />
      <Meta
        property="og:description"
        content="RFAD SE - Новый взгляд на Skyrim."
      />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="theme-color" :content="themeColor" />
      <Meta property="og:site_name" :content="brand" />
      <Meta property="og:type" content="website" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="robots" content="index, follow" />
      <Link rel="canonical" href="https://skyrimrfad.com/" />
      <Link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <!-- eslint-disable-next-line -->
      <component :is="'script'" v-html="ldjson" type="application/ld+json" />
    </Head>
    <Body class="bg-black">
      <slot />
    </Body>
  </Html>
</template>

<script setup lang="ts">
import { isBrowser } from '~/utils/isBrowser.util'

const brand = 'RFAD SE'
const title = `${brand} by Immersive Chicken`
const themeColorBrowser = '#0D0C0A'
const themeColorServer = '#0D0C0A'

const ldjson = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RFAD SE',
  url: 'https://skyrimrfad.com/',
  sameAs: [
    'https://discord.gg/q2ygjdk8Gv',
    'https://vk.com/rfad_se',
    'https://t.me/rfad_se',
    'https://boosty.to/skyrim_rfad_chicken',
    'https://www.patreon.com/RFaD_ChickenEdition',
  ],
})

const themeColor = computed(() => {
  return isBrowser() ? themeColorBrowser : themeColorServer
})
</script>

<style scoped></style>
