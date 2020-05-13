<template>
  <div>
    <h1>Hello Vue-Router</h1>
    <div>
      <h3>这里是直接state取出来</h3>
      {{count}}
      <h3>这里是计算过的</h3>
      {{changeCount}}
    </div>
    <v-test></v-test>
    <div>
      <button @click="addFun">+</button>
      <button @click="subtractFunc">-</button>
    </div>
  </div>
</template>

<script>
import vTest from '@/components/test.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'pageone',
  computed: {
    ...mapState({
      count: state => state.calculate.count
    }),
    ...mapGetters(['changeCount'])
  },
  components: {
    vTest
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
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
      console.log('----123----')
    }
  }
}
</script>

<style scoped>

</style>
