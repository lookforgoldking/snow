<template>
  <div class="today-box">
    <div class="title">
      <span class="ticket iconfont">&#xe607;</span>
      故宫学生票
    </div>
    <div class="type-adult">
      <h5 class="title-m">
        上午场
        <span class="condition">凭身份证入园</span>
      </h5>
      <div class="price">
        ￥
        <em class="price-n">20</em>
        <span class="begin">起</span>
      </div>
      <div class="more-e iconfont">&#xe625;</div>
    </div>
    <div class="type-adult">
      <h5 class="title-m">
        下午场
        <span class="condition">凭身份证入园</span>
      </h5>
      <div class="price">
        ￥
        <em class="price-n">20</em>
        <span class="begin">起</span>
      </div>
      <div class="more-e iconfont">&#xe625;</div>
    </div>
    <div class="more">
      查看剩余产品
      <span class="more-o iconfont">&#xe625;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details-student'
}
</script>

<style lang="stylus" scoped>
  .today-box
    background #fff
    margin-bottom .2rem
    .title
      height .88rem
      font-size .32rem
      line-height .88rem
      padding  0 .2rem
      border-bottom .01rem solid #eee
      .ticket
        border-radius 50%
        margin-right .1rem
        color #fff
        background #1ba9ba  
    .type-adult
      padding .24rem .2rem
      background #fff
      display flex
      border-bottom .01rem solid #eee
      .title-m
        line-height .48rem
        margin-right 3.3rem
        font-size .3rem
        color #333
        .condition
          font-size .24rem
          color #888
          line-height .32rem
      .price
        right .46rem
        color #ff9800
        display flex
        line-height .48rem
        font-size .24rem
        .price-n
          font-size .36rem
          margin-left .04rem
        .begin
          font-size .24rem
          color #9e9e9e
      .more-e
        fonr-size .24rem
        color #bbb
        line-height .48rem
    .more
      height .8rem
      line-height .8rem
      text-align center
</style>