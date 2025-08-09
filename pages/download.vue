<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
import Download from '~/components/icons/Download.vue'
import Install from '~/components/icons/Install.vue'
import Update from '~/components/icons/Update.vue'
import Play from '~/components/icons/Play.vue'
import Footer from '~/components/Footer.vue'
import DownloadFile from '~/components/icons/DownloadFile.vue'
import SmallButton from '~/components/SmallButton.vue'
import config from '~/config'

const { t } = useI18n()

enum Stage {
  Download = 1,
  Install = 2,
  Update = 3,
  Play = 4,
}

const activeStage: Ref<Stage> = ref(Stage.Download)
const activeDownloadTab: Ref<'torrent' | 'google'> = ref('torrent')

const nextStage = () => {
  if (activeStage.value < Stage.Play) activeStage.value++
}

const prevStage = () => {
  if (activeStage.value > Stage.Download) activeStage.value--
}

const setStage = (stage: Stage) => {
  activeStage.value = stage
}
</script>

<template>
  <div class="min-h-svh flex flex-col">
    <div class="bg text-white">
      <NavBar />
      <div class="container mx-auto flex flex-col gap-1.5 my-44">
        <div class="font-semibold rfad-styled-text-gradient">
          <div class="md:text-6xl text-4xl">
            {{ t('download.hero.title') }}
          </div>
        </div>
        <div
          class="text-brand-white font-semibold md:text-2xl text-xl"
          v-html="t('download.hero.subtitleHtml')"
        ></div>
      </div>
      <div class="opacity-0">{{ t('common.marginNote') }}</div>
    </div>
    <div
      class="container mx-auto mb-34 flex md:flex-row flex-col md:gap-40 gap-10"
    >
      <div class="flex flex-col gap-4">
        <div>
          <div class="text-2xl text-primary font-semibold">
            {{ t('download.sidebar.title') }}
          </div>
          <div class="text-base text-primary font-normal">
            {{ t('download.sidebar.subtitle') }}
          </div>
        </div>
        <div
          class="flex flex-row gap-2.5 items-center cursor-pointer"
          @click="setStage(Stage.Download)"
        >
          <SquareIcon :id="Stage.Download" :current="activeStage">
            <Download />
          </SquareIcon>
          <div
            :class="{
              'text-primary': activeStage === Stage.Download,
              'text-secondary': activeStage !== Stage.Download,
            }"
            class="font-medium text-lg"
          >
            {{ t('download.stages.download') }}
          </div>
        </div>
        <div
          class="flex flex-row gap-2.5 items-center cursor-pointer"
          @click="setStage(Stage.Install)"
        >
          <SquareIcon :id="Stage.Install" :current="activeStage">
            <Install />
          </SquareIcon>
          <div
            :class="{
              'text-primary': activeStage === Stage.Install,
              'text-secondary': activeStage !== Stage.Install,
            }"
            class="font-medium text-lg"
          >
            {{ t('download.stages.install') }}
          </div>
        </div>
        <div
          class="flex flex-row gap-2.5 items-center cursor-pointer"
          @click="setStage(Stage.Update)"
        >
          <SquareIcon :id="Stage.Update" :current="activeStage">
            <Update />
          </SquareIcon>
          <div
            :class="{
              'text-primary': activeStage === Stage.Update,
              'text-secondary': activeStage !== Stage.Update,
            }"
            class="font-medium text-lg"
          >
            {{ t('download.stages.update') }}
          </div>
        </div>
        <div
          class="flex flex-row gap-2.5 items-center cursor-pointer"
          @click="setStage(Stage.Play)"
        >
          <SquareIcon :id="Stage.Play" :current="activeStage">
            <Play />
          </SquareIcon>
          <div
            :class="{
              'text-primary': activeStage === Stage.Play,
              'text-secondary': activeStage !== Stage.Play,
            }"
            class="font-medium text-lg"
          >
            {{ t('download.stages.play') }}
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <template v-if="activeStage === Stage.Download">
          <div class="flex flex-col gap-4">
            <div>
              <div class="text-2xl text-primary font-semibold">
                {{ t('download.sections.download.title') }}
              </div>
              <div
                class="flex flex-row gap-2.5 text-base font-semibold tracking-wide"
              >
                <div
                  @click="activeDownloadTab = 'torrent'"
                  class="interactive"
                  :class="{
                    'border-b border-primary text-primary':
                      activeDownloadTab === 'torrent',
                    'text-secondary': activeDownloadTab !== 'torrent',
                  }"
                >
                  {{ t('download.tabs.torrent') }}
                </div>
                <div
                  @click="activeDownloadTab = 'google'"
                  class="interactive"
                  :class="{
                    'border-b border-primary text-primary':
                      activeDownloadTab === 'google',
                    'text-secondary': activeDownloadTab !== 'google',
                  }"
                >
                  {{ t('download.tabs.google') }}
                </div>
              </div>
            </div>
            <transition name="fade" mode="out-in">
              <div
                v-if="activeDownloadTab === 'torrent'"
                class="text-secondary text-lg min-h-96"
              >
                <div v-html="t('download.sections.download.torrentHtml')"></div>
                <div class="mt-2 flex flex-row gap-2.5">
                  <SmallButton :to="config.download.torrent">
                    <div class="flex flex-row gap-1.5 items-center">
                      <DownloadFile /> {{ t('download.actions.torrentFile') }}
                    </div>
                  </SmallButton>
                  <SmallButton to="" @click="nextStage">
                    <div class="flex flex-row gap-1.5 items-center">
                      {{ t('common.next') }}
                    </div>
                  </SmallButton>
                </div>
              </div>
              <div v-else class="text-secondary text-lg min-h-96">
                <div v-html="t('download.sections.download.googleHtml')"></div>
                <div class="mt-2 flex flex-row gap-2.5">
                  <SmallButton :to="config.download.googleLink">
                    <div class="flex flex-row gap-1.5 items-center">
                      <DownloadFile /> {{ t('download.actions.googleDrive') }}
                    </div>
                  </SmallButton>
                  <SmallButton :to="config.download.exeFile">
                    <div class="flex flex-row gap-1.5 items-center">
                      <DownloadFile /> {{ t('download.actions.installer') }}
                    </div>
                  </SmallButton>
                  <SmallButton to="" @click="nextStage">
                    <div class="flex flex-row gap-1.5 items-center">
                      {{ t('common.next') }}
                    </div>
                  </SmallButton>
                </div>
              </div>
            </transition>
          </div>
        </template>
        <template v-else-if="activeStage === Stage.Install">
          <div class="flex flex-col gap-4">
            <div class="text-2xl text-primary font-semibold">
              {{ t('download.sections.install.title') }}
            </div>
            <div class="text-secondary text-lg min-h-96">
              <div v-html="t('download.sections.install.html')"></div>
              <div class="mt-2 flex flex-row gap-2.5">
                <SmallButton to="" @click="nextStage">
                  <div class="flex flex-row gap-1.5 items-center">
                    {{ t('common.next') }}
                  </div>
                </SmallButton>
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="activeStage === Stage.Update">
          <div class="flex flex-col gap-4">
            <div class="text-2xl text-primary font-semibold">
              {{ t('download.sections.update.title') }}
            </div>
            <div class="text-secondary text-lg min-h-96">
              <div v-html="t('download.sections.update.html')"></div>
              <div class="mt-2 flex flex-row gap-2.5">
                <SmallButton to="" @click="nextStage">
                  <div class="flex flex-row gap-1.5 items-center">
                    {{ t('common.next') }}
                  </div>
                </SmallButton>
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="activeStage === Stage.Play">
          <div class="flex flex-col gap-4">
            <div class="text-2xl text-primary font-semibold">
              {{ t('download.sections.play.title') }}
            </div>
            <div class="text-secondary text-lg min-h-96">
              <div v-html="t('download.sections.play.html')"></div>
              <div class="mt-2 flex flex-row gap-2.5">
                <SmallButton :to="config.discordLink">
                  <div class="flex flex-row gap-1.5 items-center">
                    {{ t('common.discord') }}
                  </div>
                </SmallButton>
                <SmallButton :to="config.telegramLink">
                  <div class="flex flex-row gap-1.5 items-center">
                    {{ t('common.telegram') }}
                  </div>
                </SmallButton>
                <SmallButton to="/" :dont-open-in-new-tab="true">
                  <div class="flex flex-row gap-1.5 items-center">
                    На главную
                  </div>
                </SmallButton>
              </div>
            </div>
          </div>
        </template>
      </transition>
    </div>
    <div class="mt-auto">
      <Footer />
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  background-image: linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0%) 50%,
      #000000 100%
    ),
    linear-gradient(rgba(0, 0, 0, 20%), rgba(0, 0, 0, 20%)),
    url('assets/images/InstallationBG.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.interactive {
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
  &:active {
    transform: scale(0.98);
  }
}

.bold {
  @apply font-medium;
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: 0.25s;
    transform-origin: center 96px;
  }

  &-leave-active {
    position: relative;
  }

  &-enter-from {
    opacity: 0;
    transform: scale(0.99);
  }

  &-leave-to {
    opacity: 0;
  }
}
</style>
