export default function({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale
  if (isHMR) return
  app.i18n.locale = app.$cookies.get('lang') || defaultLocale
  if (!app.$cookies.get('lang')) {
    app.$cookies.set('lang', app.i18n.locale)
  }
}
