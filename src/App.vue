<template>
  <div>
     <router-view />
  </div>
</template>

<script>

  import getData from './utils/utils';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js'
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        console.log('---init-----')
      }
    }
  }
</script>

<style lang="scss">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;

        h1 {
            color: #CC3333;
        }
    }
</style>