export default function({ $axios, redirect, store, $auth, $cookies, app }, inject) {
  $axios.onRequest(config => {
    $axios.setHeader('X-LANG', app.$cookies.get('lang') || app.i18n.fallbackLocale)
  })

  $axios.onError(error => {
    if (error.response.status === 403) {
      redirect('/403')
    }
  })
}
