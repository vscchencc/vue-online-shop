<template>
  <div class="discover">
    <SearchBox :placeValue="placeValue"></SearchBox>
  </div>
</template>

<script>
import SearchBox from '../components/searchBox.vue'
export default {
  data () {
    return {
      placeValue: 'AJ11北卡蓝'
    }
  },
  components: {
    SearchBox
  }
}
</script>

<style>
</style>
