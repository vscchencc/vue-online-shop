<template>
  <div>
    <p>
      <router-link to="/page1">Home</router-link>
      <router-link to="/page2">About</router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      username: '1',
      password: ''
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      console.log('----123----')
    }
  }
}
</script>

<style scoped>

</style>