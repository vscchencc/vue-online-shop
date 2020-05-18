<template>
  <div class="discover">
    <SearchBox :placeValue="placeValue"></SearchBox>
    <DiscoverTitle></DiscoverTitle>
  </div>
</template>

<script>
import SearchBox from '../components/discover/searchBox.vue'
import DiscoverTitle from '../components/discover/DiscoverTitle.vue'
export default {
  data () {
    return {
      placeValue: 'AJ11北卡蓝'
    }
  },
  components: {
    SearchBox, DiscoverTitle
  }
}
</script>

<style>
</style>
