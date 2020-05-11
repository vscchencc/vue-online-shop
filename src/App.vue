<template>
<<<<<<< HEAD
  <div>
     <router-view></router-view>
=======
<<<<<<< HEAD
  <div>
     <router-view></router-view>
=======
  <div id="app">
     <router-view />
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
  </div>
</template>

<script>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d00ac21... 'twice'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
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
<<<<<<< HEAD
=======
=======

  import getData from './utils/utils';
  document.addEventListener('DOMContentLoaded',() => {
	  const html = document.documentElement;
	  let fontSize = window.innerHTML / 10;
	  fontSize = fontSize>50? 50: fontSize
	  html.style.fontSize = fontSize + 'px'
  })
	
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js'
      }
    },
    created() {
      
    },
    methods: {
     
    }
  }
</script>

<style lang="scss">
	#app{
		width: 100%;
		height: 100%;
	}
</style>
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
