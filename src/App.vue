<template>
  <div id="q-app">
    <TopBanner />
    <router-view />
  </div>
</template> 
<script>
import TopBanner  from "./components/banner/topBanner.vue"
export default {
  name: 'App',
  components:{
    TopBanner
  }
}
</script>
