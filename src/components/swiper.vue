<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item of imgList" :key="item.imgID">
      <div class="img-wrapper">
        <img :src=item.imgUrl>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imgList: [
        {
          imgUrl: 'https://i.loli.net/2020/05/13/XJouO5tG1lWFqUa.jpg',
          imgID: 1001
        },
        {
          imgUrl: 'https://i.loli.net/2020/05/13/VceaTr2ingjbS89.jpg',
          imgID: 1002
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .img-wrapper{
    width: 100%;
    height: 100%vw;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
