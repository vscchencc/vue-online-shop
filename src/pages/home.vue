<template>
  <div>
    <p>
      <router-link to="/page1">Home</router-link>
      <router-link to="/page2">About</router-link>
    </p>
    <v-navigationbar></v-navigationbar>
  </div>
</template>

<script>
import vNavigationbar from '@/components/navigationbar.vue'
export default {
  name: 'Home',
  components: {
    vNavigationbar
  },
  data () {
    return {
      username: '1',
      password: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      console.log('----123----')
    }
  }
}
</script>

<style scoped>

</style>
