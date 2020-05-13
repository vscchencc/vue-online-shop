<template>
  <div class="login-module">
    <div class="login-input-wrapper">
      <div class="user-name-wrapper">
        <span>用户名</span>
        <input class="user-name" placeholder="输入用户名"/>
      </div>
      <div class="password-wrapper">
        <span>密码</span>
        <input type="password" class="password" placeholder="输入密码"/>
      </div>
      <div class="confirm-password" v-if="!showForget">
        <span>确认密码</span>
        <input type="password" class="password" placeholder="输入确认密码"/>
      </div>
      <div class="forget-password" v-if="showForget">
        <span>忘记密码？</span>
      </div>
    </div>
    <div class="login-button">
      <span type="default" class="button">{{button}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-loginModule',
  props: {
    button: String,
    showForget: Boolean
  }
}
</script>

<style lang="scss">
@import "./../style/common.scss";
  .login-input-wrapper{
    padding: px2rem(100);
    font-size: px2rem(30);
    font-weight: 500;
    .user-name-wrapper{
      margin-bottom: px2rem(60);
      border-bottom: 1px solid #999999;
      padding-bottom: px2rem(30);
      .user-name{
        margin-top: px2rem(20);
        font-size: px2rem(40);
        border: none;
        padding-left: px2rem(20);
        &:focus{
          outline: none;
        }
        &::-webkit-input-placeholder {
          font-size: px2rem(35);
          opacity: 0.5;
        }
      }
    }
    .password-wrapper,.confirm-password{
      border-bottom: 1px solid #999999;
      margin-bottom: px2rem(60);
      padding-bottom: px2rem(30);
      .password{
        margin-top: px2rem(20);
        border: none;
        padding-left: px2rem(45);
        font-size: px2rem(40);
        &:focus{
          outline: none;
        }
        &::-webkit-input-placeholder {
          font-size: px2rem(35);
          opacity: 0.5;
        }
      }
    }
    .confirm-password{
      .password{
        width: 70%;
      }
    }
    .forget-password {
      font-size: px2rem(16);
      @include right;
    }
  }
  .login-button{
    @include center;
    padding: px2rem(60);
    .button{
      padding: px2rem(30);
      width: 80%;
      background: yellow;
      border-radius: px2rem(10);
      text-align: center;
      font-weight: bold;
    }
  }
</style>
