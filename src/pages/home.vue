<template>
  <div>
    <p>
      <router-link to="/page1">Home</router-link>
      <router-link to="/page2">About</router-link>
    </p>
    <v-navigationbar></v-navigationbar>
<<<<<<< HEAD
    <a href="" @click="handleSetLanguage('zh-CN')">中文</a>
    <a href="" @click="handleSetLanguage('en-US')">English</a>
    <span>{{$t('login.title')}}</span>
=======
>>>>>>> d00ac21... 'twice'
  </div>
</template>

<script>
import vNavigationbar from '@/components/navigationbar.vue'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d00ac21... 'twice'
  mounted () {
    this.init()
  },
  methods: {
    init () {
<<<<<<< HEAD
      console.log('----123----')
    },
    handleSetLanguage (lang) {
      this.$i18n.locale = 'en-US'
      this.$store.dispatch('setLanguage', lang)
=======
=======
  mounted() {
    this.init();
  },
  methods: {
    init() {
>>>>>>> 06c207c... 'twice'
      console.log('----123----')
>>>>>>> d00ac21... 'twice'
    }
  }
}
</script>

<style scoped>

<<<<<<< HEAD
</style>
=======
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
