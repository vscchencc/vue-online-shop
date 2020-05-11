<template>
  <div class="navigationbar-wrapper">
    <ul class="footer">
        <li>
            <a href="#">
<<<<<<< HEAD
              <i class="fa fa-camera-retro fa-lg"></i>
              <span>购物车</span>
=======
                <span>购物车</span>
>>>>>>> d00ac21... 'twice'
            </a>
        </li>
        <li>
            <a href="#">
<<<<<<< HEAD
              <i class="fa fa-bomb fa-lg"></i>
              <span>文件</span>
=======
                <span>文件</span>
>>>>>>> d00ac21... 'twice'
            </a>
        </li>
        <li>
            <a href="#">
<<<<<<< HEAD
              <i class="fa fa-coffee fa-lg"></i>
              <span>扫描</span>
=======
                <span>扫描</span>
>>>>>>> d00ac21... 'twice'
            </a>
        </li>
        <li>
            <a href="#">
<<<<<<< HEAD
              <i class="fa fa-car fa-lg"></i>
              <span>箭头</span>
            </a>
        </li>
        <li>
            <a href="#">
              <i class="fa fa-camera-retro fa-lg"></i>
              <span>箭头</span>
=======
                <span>箭头</span>
            </a>
        </li>
        <li>
<<<<<<< HEAD
            <a href="#">
                <span>箭头</span>
=======
            <a href="#" @click="jumplogin">
                <span>Me</span>
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d00ac21... 'twice'
  created () {
    this.init()
  },
  methods: {
    init () {
      console.log('----123----')
<<<<<<< HEAD
=======
=======
  created() {
    
  },
  methods: {
    jumplogin() {
      this.$router.push('/login')
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
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
<<<<<<< HEAD
        flex:1; /*平分空间*/
=======
<<<<<<< HEAD
        flex:1; /*平分空间*/
=======
        flex:1;/*平分空间*/
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
        a{
          height:100%;
          display: flex;
          flex-direction:column;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d00ac21... 'twice'
          justify-content: center; /*水平居中*/
          align-items:center; /*垂直居中*/
        }
      }
    }
  }
</style>
<<<<<<< HEAD
=======
=======
          justify-content: center;/*水平居中*/
          align-items:center;/*垂直居中*/}
      } 
    }
  }
</style>
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
