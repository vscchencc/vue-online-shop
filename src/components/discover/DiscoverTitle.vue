<template>
  <div class="discover-title">
    <div class="title-wrapper" v-for="item in title" :key="item.id">
      <div class="title-value">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: [
        {
          name: '推荐',
          id: 101
        },
        {
          name: '热门',
          id: 102
        },
        {
          name: '穿搭',
          id: 103
        },
        {
          name: '开箱',
          id: 104
        },
        {
          name: '最新',
          id: 105
        },
        {
          name: '附近',
          id: 106
        }
      ]
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
@import "./../../style/common.scss";
  .discover-title{
    display: flex;
    padding: px2rem(30);
    .title-wrapper{
      padding: 0 px2rem(10);
      font-weight: bold;
      .title-value{
      }
    }
  }
</style>
