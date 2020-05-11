<template>
  <div>
    <p>
      <router-link to="/page1">Home</router-link>
      <router-link to="/page2">About</router-link>
    </p>
    <v-navigationbar></v-navigationbar>
    <a href="" @click="handleSetLanguage('zh-CN')">中文</a>
    <a href="" @click="handleSetLanguage('en-US')">English</a>
    <span>{{$t('login.title')}}</span>
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
    },
    handleSetLanguage (lang) {
      this.$i18n.locale = 'en-US'
      this.$store.dispatch('setLanguage', lang)
      console.log('----123----')
    }
  }
}
</script>

<style scoped>

</style>
