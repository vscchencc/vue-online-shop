<template>
  <div class="scroll-wrapper" :class="{'no-scroll': ifNoScroll}" @scroll.passive="handleScroll" ref="scrollWrapper">
    <slot></slot>
  </div>
</template>

<script>
import { realPx } from '../utils/utils.js'

export default {
  props: {
    top: {
      type: Number,
      default: 0
    },
    bottom: {
      type: Number,
      default: 0
    },
    ifNoScroll: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleScroll (e) {
      // 元素滚动的时候触发，把当前移动的距离传出去
      const offsetY = e.target.scrollTop || window.pageYOffset || document.body.scrollTop
      this.$emit('onScroll', offsetY)
    },
    scrollTo (x, y) {
      // 移动到坐标所在的位置
      this.$refs.scrollWrapper.scrollTo(x, y)
    },
    refresh () {
      if (this.$refs.scrollWrapper) {
        this.$refs.scrollWrapper.style.height =
          window.innerHeight - realPx(this.top) - realPx(this.bottom) + 'px'
        this.$refs.scrollWrapper.addEventListener('scroll', this.handleScroll)
      }
    }
  },
  mounted () {
    this.refresh()
  }
}
</script>

<style lang="scss"  scoped>
  @import "./../style/common.scss";
  .scroll-wrapper {
    position: relative;
    z-index: 100;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    &.no-scroll {
      overflow: hidden;
    }
  }
</style>
