<template>
  <div class="w-full min-h-full md:h-128 flex flex-col md:flex-row gap-12">
    <div class="md:w-[50%] h-80 md:h-full">
      <a target="_blank" :href="config.googleTableLink">
        <KnowledgeDB />
      </a>
    </div>
    <div class="md:w-[50%] h-116 md:h-full">
      <Socials />
    </div>
  </div>
</template>
<script setup lang="ts">
import KnowledgeDB from '~/components/additional-materials-parts/KnowledgeDB.vue'
import Socials from '~/components/additional-materials-parts/Socials.vue'
import config from '~/config'
</script>
