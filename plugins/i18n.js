import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: app.$cookies.get('lang') || 'vi',
    fallbackLocale: 'vi',
    silentTranslationWarn: true,
    messages: {
      'vi': require('~/locales/vi.json'),
      'en': require('~/locales/en.json')
    }
  })
}
