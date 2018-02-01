<template>
  <div class="header">
    <div class="header-im">
      <p class="callb iconfont">&#xe631;</p>
      <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" class="imgs">
      <span class="name-p">
        故宫(AAAAA景区)
      </span>
      <span class="pic">
        <p class="pp iconfont">&#xe616;</p>
        <p class="num">10</p>
      </span>
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
      z-index 1000
      .callb
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
      .name-p
        position absolute
        top 3.5rem
        left .2rem
        font-size .32rem
        color white
      .pic
        position absolute
        top 3.4rem
        left 6.1rem
        display block
        width 1.2rem
        height .4rem
        background rgba(22 22 22 .5)
        border-radius .2rem
        line-height .4rem
        .pp
          display inline-block
          width .4rem
          height .2rem
          pading-left .2rem
          color white
          margin-left .2rem
        .num
          display inline-block
          width .3rem
          height .3rem
          color white
          text-align center
          line-height .3rem
</style>