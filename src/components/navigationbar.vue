<template>
  <div class="navigationbar-wrapper">
    <ul class="footer">
        <li>
            <a href="#">
              <i class="fa fa-camera-retro fa-lg"></i>
              <span>购物车</span>
            </a>
        </li>
        <li>
            <a href="#">
              <i class="fa fa-bomb fa-lg"></i>
              <span>文件</span>
            </a>
        </li>
        <li>
            <a href="#">
              <i class="fa fa-coffee fa-lg"></i>
              <span>扫描</span>
            </a>
        </li>
        <li>
            <a href="#">
              <i class="fa fa-car fa-lg"></i>
              <span>箭头</span>
            </a>
        </li>
        <li>
            <a href="#">
              <i class="fa fa-camera-retro fa-lg"></i>
              <span>箭头</span>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'v-navigationbar',
  data () {
    return {
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      console.log('----123----')
    }
  }
}
</script>

<style lang="scss" scoped>
  .navigationbar-wrapper {
    width: 100%;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width:100%;
      height:80px;
      position: fixed;
      background:lightblue;
      bottom:0;
      display: flex;
      li{
        flex:1; /*平分空间*/
        a{
          height:100%;
          display: flex;
          flex-direction:column;
          justify-content: center; /*水平居中*/
          align-items:center; /*垂直居中*/
        }
      }
    }
  }
</style>
