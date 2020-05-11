<template>
<<<<<<< HEAD
  <div>
    <p>这个是登陆页面</p>
=======
<<<<<<< HEAD
  <div>
    <p>这个是登陆页面</p>
=======
  <div class="login">
	  <div class="login-wrapper">
		  <div class="back-icon" @click="backHome">
			  <span>这是个后退的图标</span>
		  </div>
		  <div class="login-name">
			  <span>登陆	</span>
		  </div>
		  <loginModule :button="'登陆'" :showForget="true"></loginModule>
	  </div>
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: 'Login',
=======
<<<<<<< HEAD
export default {
  name: 'Login',
=======
import loginModule from '../components/loginModule.vue'
export default {
  name: 'Login',
  components:{
	loginModule
  },
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
  data () {
    return {
    }
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d00ac21... 'twice'
  created () {
    this.init()
  },
  methods: {
    init () {
      console.log('----login----')
    }
<<<<<<< HEAD
=======
=======
  created() {
    
  },
  methods: {
    backHome() {
		this.$router.push('/initial')
	}
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
  }
}
</script>

<<<<<<< HEAD
<style scoped>

</style>
=======
<<<<<<< HEAD
<style scoped>

</style>
=======
<style scoped lang="scss">
@import "./../style/common.scss";
.login{
	width: 100%;
	height: 100%;

	.login-wrapper{
		display: flex;
		flex-direction: column;
		.back-icon{
			
		}
		.login-name{
			margin-top: px2rem(100);
			@include center;
			font-size: px2rem(60);
			font-weight: bold;
		}
	}
}
</style>
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
