<script setup lang="ts"></script>

<template>
  <div
    class="container mx-auto w-[calc(60%-40px)] text-primary h-40 bg-footer-bg border border-1 border-b-0 rounded-t-md border-tile-border pt-6 pb-3 px-8 flex flex-row justify-between"
  >
    <div class="flex flex-col justify-between h-full">
      <div class="flex flex-col">
        <div class="rfad-styled-text-gradient text-2xl font-bold">RFAD SE</div>
        <div class="text-white text-opacity-50 font-semibold">
          Оригинал от Xandr,<br />
          реворк от Immersive Chicken.
        </div>
      </div>
      <div class="font-semibold text-lg text-white text-opacity-50">
        Сайт был сделан:
        <span class="amirust-gradient">Amirust</span> &
        <span class="zodiac-gradient">Zodiac</span>
      </div>
    </div>

    <div class="flex flex-col gap-2.5">
      <div>
        <div class="text-white text-opacity-50 font-bold text-lg">Ресурсы</div>
      </div>
      <div class="text-white text-opacity-50 font-medium">
        <div>Скачать RFAD</div>
        <div>Патч ноут</div>
        <div>База Знаний</div>
      </div>
    </div>

    <div class="flex flex-col gap-2.5">
      <div>
        <div class="text-white text-opacity-50 font-bold text-lg">
          Соц. Сети
        </div>
      </div>
      <div class="text-white text-opacity-50 font-medium">
        <div>Telegram</div>
        <div>Discord</div>
        <div>ВКонтакте</div>
      </div>
    </div>

    <div class="flex flex-col gap-2.5">
      <div>
        <div class="text-white text-opacity-50 font-bold text-lg">
          Поддержать
        </div>
      </div>
      <div class="text-white text-opacity-50 font-medium">
        <div>Boosty</div>
        <div>Patreon</div>
      </div>
    </div>

    <div class="flex flex-col gap-2.5">
      <div>
        <div class="text-white text-opacity-50 font-bold text-lg">
          Особая благодарность
        </div>
      </div>
      <div class="text-white text-opacity-50 font-medium">
        <div>Akira Ray (Скриншоты)</div>
        <div>Nerury (Скриншоты)</div>
        <div>Hokuto no Ken (Скриншоты)</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.amirust-gradient {
  background: linear-gradient(
      90deg,
      rgba(255, 46, 109, 75%) -50%,
      rgba(255, 234, 191, 75%) 150%
    ),
    linear-gradient(rgba(255, 255, 255, 50%), rgba(255, 255, 255, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.zodiac-gradient {
  background: linear-gradient(
      90deg,
      rgba(199, 105, 254, 50%) -50%,
      rgba(255, 0, 4, 50%) 200%
    ),
    linear-gradient(rgba(255, 255, 255, 50%), rgba(255, 255, 255, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
