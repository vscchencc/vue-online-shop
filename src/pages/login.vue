<template>
  <div>
    <p>这个是登陆页面</p>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      console.log('----login----')
    }
  }
}
</script>

<style scoped>

</style>