<template>
    <div>
      <h1>
        Hello chencc
      </h1>
      <h1>{{ msg }}</h1>
      <img src="../images/haizeiwang.jpg">
      <input type="text" v-model="msg">
    </div>
</template>

<script>
import getData from '../utils/utils';
export default {
  name: 'pageone',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  created () {
    this.fetchData();
  },
  mounted () {
    this.getExam()
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.msg = data;
    },
    getExam () {
      this.$server.exam().then(data => {
        // console.log(data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>