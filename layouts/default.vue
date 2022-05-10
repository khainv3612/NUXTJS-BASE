<template>
  <div class="main-page">
    <nuxt/>
    <LoadingBar/>
  </div>
</template>

<script>
import LoadingBar from '../components/LoadingBar'
import { INDEX_SET_LOADING } from "~/store/store.const";
export default {
  name: 'DefaultLayout',
  components: { LoadingBar },
 async mounted() {
   await this.$store.commit(INDEX_SET_LOADING, true)
 }
}
</script>
