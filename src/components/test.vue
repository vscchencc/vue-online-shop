<template>
  <div>
    <p>test Components</p>
  </div>
</template>

<script>

export default {
  name: 'v-test',
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

<style scoped>

</style>
