<script setup lang="ts">
import Button from '~/components/Button.vue'
import NavBar from '~/components/NavBar.vue'
import Download from '~/components/icons/Download.vue'
import Install from '~/components/icons/Install.vue'
import Update from '~/components/icons/Update.vue'
import Play from '~/components/icons/Play.vue'
import Footer from '~/components/Footer.vue'
import DownloadFile from '~/components/icons/DownloadFile.vue'
import SmallButton from '~/components/SmallButton.vue'

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
          <div class="md:text-6xl text-4xl">Установка RFAD SE</div>
        </div>
        <div class="text-brand-white font-semibold md:text-2xl text-xl">
          Это намного проще, чем кажется! <br />
          Если вы живете в ЕС, скачивайте игру через Google
        </div>
      </div>
      <div class="opacity-0">Text for normal margin =) Hello</div>
    </div>
    <div
      class="container mx-auto mb-34 flex md:flex-row flex-col md:gap-40 gap-10"
    >
      <div class="flex flex-col gap-4">
        <div>
          <div class="text-2xl text-primary font-semibold">
            Как начать играть?
          </div>
          <div class="text-base text-primary font-normal">
            Выполните эти 4 простых шага
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
            Скачаем сборку
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
            Установим
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
            Обновим
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
            Играем!
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <template v-if="activeStage === Stage.Download">
          <div class="flex flex-col gap-4">
            <div>
              <div class="text-2xl text-primary font-semibold">
                Скачаем сборку
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
                  Torrent
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
                  Google Drive
                </div>
              </div>
            </div>
            <transition name="fade" mode="out-in">
              <div
                v-if="activeDownloadTab === 'torrent'"
                class="text-secondary text-lg min-h-96"
              >
                Скачайте
                <a class="bold text-block-inner-text">Torrent файл</a>
                установщика. Мы рекомендуем использовать
                <a class="bold text-block-inner-text">QBitTorrent</a> для
                скачиванния. <br /><br />
                В установщике уже вшита игра Skyrim SE + сборка.<br />
                <p class="bold text-block-inner-text">
                  ВАМ НЕ НУЖНА ОФФИЦИАЛЬНАЯ КОПИЯ SKYRIM SE.
                </p>
                <br />
                <p class="font-semibold">Системные требования</p>
                Для игры без ENB — GTX 1060 (6гб VRAM) либо эквивалент от
                AMD.<br />
                Для игры с ENB — GTX 1660 либо Radeon 570 и выше.<br />
                Как минимум 4-х ядерный процессор 3.5GHz.<br />
                Минимум 8гб оперативной памяти.<br />
                ~65гб места на диске. Рекомендуется ставить на SSD.

                <div class="mt-2 flex flex-row gap-2.5">
                  <SmallButton to="">
                    <div class="flex flex-row gap-1.5 items-center">
                      <DownloadFile /> Torrent Файл
                    </div>
                  </SmallButton>
                  <SmallButton to="" @click="nextStage">
                    <div class="flex flex-row gap-1.5 items-center">Дальше</div>
                  </SmallButton>
                </div>
              </div>
              <div v-else class="text-secondary text-lg min-h-96">
                Перейдите по <a class="bold text-block-inner-text">ссылке</a>,
                там вы найдете 23 bin файла. Их все нужно скачать, а так же
                поместить в отдельную папку.<br />
                После того как вы это сделали, скачайте по
                <a class="bold text-block-inner-text">этой ссылке</a> exe файл
                установщика, и поместите его в эту же папку. <br /><br />
                В установщике уже вшита игра Skyrim SE + сборка.<br />
                <p class="bold text-block-inner-text">
                  ВАМ НЕ НУЖНА ОФФИЦИАЛЬНАЯ КОПИЯ SKYRIM SE.
                </p>
                <br />
                <p class="font-semibold">Системные требования</p>
                Для игры без ENB — GTX 1060 (6гб VRAM) либо эквивалент от
                AMD.<br />
                Для игры с ENB — GTX 1660 либо Radeon 570 и выше.<br />
                Как минимум 4-х ядерный процессор 3.5GHz.<br />
                Минимум 8гб оперативной памяти.<br />
                ~65гб места на диске. Рекомендуется ставить на SSD.

                <div class="mt-2 flex flex-row gap-2.5">
                  <SmallButton to="">
                    <div class="flex flex-row gap-1.5 items-center">
                      <DownloadFile /> Google drive
                    </div>
                  </SmallButton>
                  <SmallButton to="">
                    <div class="flex flex-row gap-1.5 items-center">
                      <DownloadFile /> Установщик
                    </div>
                  </SmallButton>
                  <SmallButton to="" @click="nextStage">
                    <div class="flex flex-row gap-1.5 items-center">Дальше</div>
                  </SmallButton>
                </div>
              </div>
            </transition>
          </div>
        </template>
        <template v-else-if="activeStage === Stage.Install">
          <div class="flex flex-col gap-4">
            <div class="text-2xl text-primary font-semibold">
              Установим сборку
            </div>
            <div class="text-secondary text-lg min-h-96">
              После того как вы всё скачали, откройте установщик
              <span class="bold text-block-inner-text">RfaD SE 6.0.exe</span>
              и установите сборку.<br /><br />
              <p class="font-semibold">ВАЖНО</p>
              1. Я не знаю что выбрать: ENB или ReShade<br />
              Для игры с ReShade — GTX 1060 (6гб VRAM) либо эквивалент от
              AMD.<br />
              Для игры с ENB — GTX 1660 либо Radeon 570 и выше.<br />
              Если вы играете на ноутбуках, где видеокарта слабее чем RTX 3060M,
              рекомендуется выбрать ReShade.<br />
              2. Мы рекомендуем выбирать все Redist (.NET 6.0 и Microsoft Visual
              C++) чтобы избежать проблем с сборкой.

              <div class="mt-2 flex flex-row gap-2.5">
                <SmallButton to="" @click="nextStage">
                  <div class="flex flex-row gap-1.5 items-center">Дальше</div>
                </SmallButton>
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="activeStage === Stage.Update">
          <div class="flex flex-col gap-4">
            <div class="text-2xl text-primary font-semibold">
              Обновим сборку
            </div>
            <div class="text-secondary text-lg min-h-96">
              Так как мы часто обновляем сборку, очень важно постоянно
              поддерживать актуальный контент.<br />
              После установки игры, найдите на вашем рабочем столе ярлык
              <span class="bold text-block-inner-text">RfaD Launcher</span>,
              откройте его.<br />
              Дальше подождите несколько секунд пока лаунчер проверит наличие
              актуальной версии, и нажмите кнопку
              <span class="bold text-block-inner-text">ОБНОВИТЬ</span>.
              <br />
              Дождитесь уведомления что обновление закончено, и можете
              наслаждаться игрой!<br /><br />
              <p class="font-semibold">ВАЖНО</p>
              Зачастую при обновлениях вам нужно будет начинать новую игру.<br />Это
              рекомендуемая практика чтобы исбежать каких либо проблем с игрой.
              <br />
              Новую игру можно не начинать только в том случае, если в выпуске
              новостей о патче было об это сказано.

              <div class="mt-2 flex flex-row gap-2.5">
                <SmallButton to="" @click="nextStage">
                  <div class="flex flex-row gap-1.5 items-center">Дальше</div>
                </SmallButton>
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="activeStage === Stage.Play">
          <div class="flex flex-col gap-4">
            <div class="text-2xl text-primary font-semibold">
              Наслаждаемся игрой!
            </div>
            <div class="text-secondary text-lg min-h-96">
              Было просто, не так ли?<br />
              Теперь, когда сборка скачана и обновлена, вы можете погрузиться в
              мир RFAD SE!<br />
              Не забывайте присоединятся к нашим комьюнити в
              <a class="bold text-block-inner-text">Discord</a> и
              <a class="bold text-block-inner-text">Telegram</a>!
              <br />
              <br />
              Вы можете закрыть эту вкладку.
              <div class="mt-2 flex flex-row gap-2.5">
                <SmallButton to="" @click="nextStage">
                  <div class="flex flex-row gap-1.5 items-center">Discord</div>
                </SmallButton>
                <SmallButton to="" @click="nextStage">
                  <div class="flex flex-row gap-1.5 items-center">Telegram</div>
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
