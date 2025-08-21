import config from '~/config'

export default {
  common: {
    download: 'Скачать',
    next: 'Дальше',
    discord: 'Discord',
    telegram: 'Telegram',
    marginNote: 'Text for normal margin =) Hello',
  },
  index: {
    hero: {
      title: 'Requiem For A Dream',
      subtitle: 'by Immersive Chicken',
      description:
        'RFAD SE — это передовая и технологичная сборка на Skyrim на основе глобального мода Requiem.',
      learnMore: 'Узнать больше',
    },
    features: {
      title: 'Новое виденье Скайрима',
      tiles: {
        weapons: 'Расширенный арсенал',
        bosses: 'Новые боссы',
        mechanics: 'Уникальные механики',
        graphics: 'Переработанная графика',
        locations: 'Авторские локации',
        rpgRework: 'Реворк RPG системы',
      },
    },
    why: {
      title: 'Почему RFAD?',
      tiles: {
        updates: 'Частые и большие обновления',
        technology: 'Множество новых классов и билдов',
        content: 'Огромное сообщество и его контент',
        launcher: 'Лаунчер и простая установка',
      },
    },
    download: {
      title: 'Бросьте вызов новому Скайриму!',
      description:
        'RFAD SE — это не просто сборка на Skyrim, это целый новый мир.',
    },
  },
  download: {
    hero: {
      title: 'Установка RFAD SE',
      subtitleHtml:
        'Это намного проще, чем кажется! <br /> Если вы живете в ЕС, скачивайте игру через Google',
    },
    sidebar: {
      title: 'Как начать играть?',
      subtitle: 'Выполните эти 4 простых шага',
    },
    stages: {
      download: 'Скачаем сборку',
      install: 'Установим',
      update: 'Обновим',
      play: 'Играем!',
    },
    tabs: {
      torrent: 'Torrent',
      google: 'Google Drive',
      yadisk: 'Яндекс Диск',
    },
    sections: {
      download: {
        title: 'Скачаем сборку',
        torrentHtml: `Скачайте <a class="bold text-block-inner-text" href="${config.download.torrent}">Torrent файл</a> установщика. Мы рекомендуем использовать <a href="${config.qbit}" class="bold text-block-inner-text">QBitTorrent</a> для скачиванния. <br /><br /> <p class="bold text-block-inner-text">В УСТАНОВЩИКЕ УЖЕ ВШИТА ИГРА ВМЕСТЕ С СБОРКОЙ.</p> <br /> <p class="font-semibold">Системные требования</p> Для игры без ENB требуется GTX 1060 (6гб VRAM) либо эквивалент от AMD.<br /> Для игры с ENB требуется GTX 1660 либо Radeon 570 и выше.<br /> Как минимум 4-х ядерный процессор 3.5GHz.<br /> Минимум 8гб оперативной памяти.<br /> ~65гб места на диске. Рекомендуется ставить на SSD.`,
        googleHtml: `Перейдите по <a class="bold text-block-inner-text" href="${config.download.googleLink}">ссылке</a>, там вы найдете .bin файлы. Их все нужно скачать и поместить в отдельную папку.<br /> После того как вы это сделали, скачайте по <a class="bold text-block-inner-text" href="${config.download.exeFile}">этой ссылке</a> exe файл установщика и поместите его в эту же папку. <br /><br /> <p class="bold text-block-inner-text">В УСТАНОВЩИКЕ УЖЕ ВШИТА ИГРА ВМЕСТЕ С СБОРКОЙ.</p> <br /> <p class="font-semibold">Системные требования</p> Для игры без ENB требуется GTX 1060 (6гб VRAM) либо эквивалент от AMD.<br /> Для игры с ENB требуется GTX 1660 либо Radeon 570 и выше.<br /> Как минимум 4-х ядерный процессор 3.5GHz.<br /> Минимум 8гб оперативной памяти.<br /> ~65гб места на диске. Рекомендуется ставить на SSD.`,
        yadiskHtml: `Перейдите по <a class="bold text-block-inner-text" href="${config.download.yadisk}">ссылке</a>, там вы найдете .bin файлы и .exe файл. Их все нужно скачать и поместить в отдельную папку.<br /><br /> <p class="bold text-block-inner-text">В УСТАНОВЩИКЕ УЖЕ ВШИТА ИГРА ВМЕСТЕ С СБОРКОЙ.</p> <br /> <p class="font-semibold">Системные требования</p> Для игры без ENB требуется GTX 1060 (6гб VRAM) либо эквивалент от AMD.<br /> Для игры с ENB требуется GTX 1660 либо Radeon 570 и выше.<br /> Как минимум 4-х ядерный процессор 3.5GHz.<br /> Минимум 8гб оперативной памяти.<br /> ~65гб места на диске. Рекомендуется ставить на SSD.`,
      },
      install: {
        title: 'Установим сборку',
        html: 'После того как вы всё скачали, откройте установщик <span class="bold text-block-inner-text">RfaD SE 6.1.exe</span> и установите сборку.<br /><br /> <p class="font-semibold">ВАЖНО</p> 1. Я не знаю, что выбрать: ENB или ReShade<br /> Для игры с ReShade требуется GTX 1060 (6гб VRAM) либо эквивалент от AMD.<br /> Для игры с ENB требуется GTX 1660 либо Radeon 570 и выше.<br /> Если вы играете на ноутбуках, где видеокарта слабее чем RTX 3060M, рекомендуется выбрать ReShade.<br /> 2. Мы рекомендуем выбирать все Redist (.NET 6.0 и Microsoft Visual C++) чтобы избежать проблем с сборкой.',
      },
      update: {
        title: 'Обновим сборку',
        html: 'Так как мы часто обновляем сборку, очень важно постоянно поддерживать актуальный контент.<br /> После установки игры найдите на вашем рабочем столе ярлык <span class="bold text-block-inner-text">RfaD Launcher</span> и откройте его.<br /> Далее подождите несколько секунд пока лаунчер проверит наличие актуальной версии, и нажмите кнопку <span class="bold text-block-inner-text">ОБНОВИТЬ</span>.<br /> <br /> Дождитесь уведомления о том, что обновление закончено и можете наслаждаться игрой!<br /><br /> <p class="font-semibold">ВАЖНО</p> Зачастую при обновлениях вам нужно будет начинать новую игру.<br />Это рекомендуемая практика, чтобы избежать каких-либо проблем с игрой.<br /> Новую игру можно не начинать только в том случае, если в выпуске новостей о патче было об это сказано.',
      },
      play: {
        title: 'Наслаждаемся игрой!',
        html: `Было просто, не так ли?<br /> Теперь, когда сборка скачана и обновлена, вы можете погрузиться в мир RFAD SE!<br /> Не забывайте присоединяться к нашему комьюнити в <a class="bold text-block-inner-text" href="${config.discordLink}">Discord</a> и <a class="bold text-block-inner-text" href="${config.telegramLink}">Telegram</a>!<br /><br /> Вы можете закрыть эту вкладку.`,
      },
    },
    actions: {
      torrentFile: 'Torrent Файл',
      googleDrive: 'Google drive',
      yadisk: 'Яндекс Диск',
      installer: 'Установщик',
    },
  },
}
