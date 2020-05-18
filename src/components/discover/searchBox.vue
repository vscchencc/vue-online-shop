<template>
  <div class="searchBox">
    <div class="search-wrapper">
      <input type="text" :placeholder="placeValue" class="search-input">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeValue: String
  }
}
</script>

<style lang="scss" scoped>
@import "./../../style/common.scss";
  .searchBox{
    .search-wrapper{
      box-sizing: border-box;
      padding: px2rem(30);
      .search-input{
        width: 100%;
        height: px2rem(80);
        border: none;
        background: #D2E0E6;
        border-radius: px2rem(20);
        padding: 0 px2rem(30);
        box-sizing: border-box;
        &:focus{
          outline: none;
        }
      }
    }
  }
</style>
