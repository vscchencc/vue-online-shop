<template>
	<div class="initial">
		<div class="initial-content">
			这里放海报
		</div>
		<div class="initial-button-wrapper">
			<div class="register" @click="goToRegister">注册</div>
			<div class="land" @click="goToLogin">登陆</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			goToLogin() {
				this.$router.push('/login')
			},
			goToRegister() {
				this.$router.push('./register')
			}
		}
	}
</script>

<style lang="scss">
	@import "./../style/common.scss";
	.initial{
		width: 100%;
		height: 100%;
		background: yellow;
		display: flex;
		flex-direction: column;
		.initial-content{
			flex: 1;
			@include center;
		}
		.initial-button-wrapper{
			display: flex;
			justify-content: space-around;
			.register,.land{
				height: px2rem(100);
				background: #e8e997;
				width: px2rem(350);
				@include center;
				border-radius: px2rem(10);
				margin-bottom: px2rem(100);
			}
		}
	}
</style>
