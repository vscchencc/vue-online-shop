<template>
  <div class="login">
    <div class="login-wrapper">
      <div class="back-icon" @click="backHome">
        <span>这是个后退的图标</span>
      </div>
      <div class="login-name">
        <span>注册</span>
      </div>
      <v-loginModule :button="'注册'" :showForget="false"></v-loginModule>
    </div>
  </div>
</template>

<script>
import vLoginModule from '@/components/loginModule.vue'
export default {
  name: 'Login',
  components: {
    vLoginModule
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    backHome () {
      this.$router.push('/initial')
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../style/common.scss";
.login{
  width: 100%;
  height: 100%;
  .login-wrapper{
    display: flex;
    flex-direction: column;
    .login-name{
      margin-top: px2rem(100);
      @include center;
      font-size: px2rem(60);
      font-weight: bold;
    }
  }
}
</style>
