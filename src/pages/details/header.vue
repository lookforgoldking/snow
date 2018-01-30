<template>
  <div class="header">
    <div class="header-im">
      <p class="iconfont">&#xe624;</p>
      <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" class="imgs">
    </div>
  </div>
</template>
<script>
export default {
  name: 'details-header'
}
</script>

<style lang="stylus" scoped>
    .header-im
      width 100%
      .iconfont
        display block
        width .72rem
        height .72rem
        border-radius 50%
        background rgba(22 22 22 0.5)
        position absolute
        top .1rem
        left .1rem
        line-height .72rem
        text-align center
        color #fff
        font-weight 900
      .imgs
        width 100%
        height 100%
</style>