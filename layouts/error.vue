<template>
  <div class="page-error">
    <a href="/">
      <img v-if="error.statusCode === 404" class="pic-404__parent" src="@/assets/images/404.svg" alt="404">
      <img v-else-if="error.statusCode === 500" class="pic-404__parent" src="@/assets/images/500.svg" alt="500">
    </a>
  </div>
</template>

<script>
export default {
  name: 'PageError',
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

