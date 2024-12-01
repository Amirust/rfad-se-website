import ru from '~/locale/ru'

const messages = { ru }

export default defineI18nConfig(() => ({
  flatJson: true,
  globalInjection: true,
  locale: 'ru',
  langDir: './locales',
  fallbackLocale: 'ru',
  warnHtmlInMessage: false,
  allowComposition: true,
  strictMessage: false,
  messages,
  pluralizationRules: {
    ru: (choice, choicesLength) => {
      if (choice === 0) return 0
      const teen = choice > 10 && choice < 20
      const endsWithOne = choice % 10 === 1
      if (choicesLength < 4) return teen || !endsWithOne ? 2 : 1
      if (endsWithOne) return 1
      return !teen && choice % 10 >= 2 && choice % 10 <= 4 ? 2 : 3
    },
  },
}))
