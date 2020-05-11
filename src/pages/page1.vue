<template>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d00ac21... 'twice'
  <div>
    <h1>Hello Vue-Router</h1>
    <div>
      <h3>这里是直接state取出来</h3>
      {{count}}
<<<<<<< HEAD
      <h3>这里是计算过的</h3>
=======
      <h3>这里是直接state取出来</h3>
>>>>>>> d00ac21... 'twice'
      {{changeCount}}
    </div>
    <v-test></v-test>
    <div>
      <button @click="addFun">+</button>
      <button @click="subtractFunc">-</button>
    </div>
  </div>
<<<<<<< HEAD
=======
=======
    <h1>
        Hello Vue-Router
        <div>
          <h3>这里是直接state取出来</h3>
          {{count}}
          <h3>这里是直接state取出来</h3>
          {{changeCount}}
        </div>
        <v-test></v-test>
        <div>
          <button @click="addFun">+</button>
          <button @click="subtractFunc">-</button>
        </div>
    </h1>
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
</template>

<script>
import vTest from '@/components/test.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'pageone',
  computed: {
<<<<<<< HEAD
    ...mapState({
      count: state => state.calculate.count
    }),
    ...mapGetters(['changeCount'])
=======
<<<<<<< HEAD
    ...mapState(['count']),
    ...mapGetters(['changeCount'])
=======
    ...mapState(["count"]),
    ...mapGetters(["changeCount"])
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
  },
  components: {
    vTest
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
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
    ...mapActions(['adds', 'subtracts']),
    addFun () {
      const n = 10
      this.adds(n)
    },
    subtractFunc () {
      this.subtracts()
    },
    init () {
<<<<<<< HEAD
=======
=======
  created() {
    this.init();
  },
  methods: {
    ...mapActions(["adds", "subtracts"]),
    addFun() {
      let n = 10
      this.adds(n)
    },
    subtractFunc() {
      this.subtracts()
    },
    init() {
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
      console.log('----123----')
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
