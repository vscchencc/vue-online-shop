<template>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d00ac21... 'twice'
  <div>
    <h1>
      Hello chencc
    </h1>
    <h1>{{ msg }}</h1>
    <img src="../images/haizeiwang.jpg"></img>
    <input type="text" v-model="msg"></input>
  </div>
</template>

<script>
import getData from '../utils/utils'
<<<<<<< HEAD
=======
=======
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
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
export default {
  name: 'pageone',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  created () {
<<<<<<< HEAD
    this.fetchData()
=======
<<<<<<< HEAD
    this.fetchData()
=======
    this.fetchData();
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
  },
  mounted () {
    this.getExam()
  },
  methods: {
<<<<<<< HEAD
    async fetchData () {
      const data = await getData()
      this.msg = data
=======
<<<<<<< HEAD
    async fetchData () {
      const data = await getData()
      this.msg = data
=======
    async fetchData() {
      const data = await getData();
      this.msg = data;
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
    },
    getExam () {
      this.$server.exam().then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
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
