<template>
  <div class="recommend">
  	<div class="recommend-t">
      <span class="well iconfont">&#xe702;</span>
      <span class="txt-box">{{text}}</span>
  	</div>
    <div class="type-m">
      <div class="type-k">
        <h4 class="ticket-name">{{title}}</h4>
        <div class="ticket-rule">
          <span class="rule iconfont">
            &#xe63a;
            <p class="rule-o">可订明日</p>
          </span>
          <span class="prompt iconfont">
            &#xe60d;
            <p class="prompt-o">不可退</p>
          </span>
        </div>
      </div>
    </div>
    <div class="price">
      <span class="price-rmb">￥50</span>
      <span class="btn">预订</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details-recommend',
  data () {
    return {
      text: '去哪儿推荐',
      title: '【上午场】故宫成人票+故宫全景手绘地图'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .recommend
    position relative
    background #fff
    margin-bottom .2rem
    .recommend-t
      width 100%
      height .7rem
      line-height .7rem
      border-bottom .02rem solid #d9d9d9
      padding-top .16rem
      .well
        display inline-block
        width .5rem
        height .5rem
        border-radius 50%
        background #fc6f65
        color #fff
        line-height .5rem
        text-align center
        margin 0 .2rem
      .txt-box
        width 2rem
        height .6rem
        font-size .32rem
    .blk
      width 0
      padding 0
      padding .04rem 0 .08rem 0
    .type-m
      padding .2rem .2rem .24rem .2rem
      .ticket-name
        width 5.2rem
        height 1.12rem
        margin-right .1rem
        line-height .56rem
        font-size .3rem
      .ticket-rule
        width 5.28rem
        height .32rem
        padding .04rem 0 .08rem 0
        .rule
          color #1ba9ba
          margin-right .24rem
          .rule-o
            display inline-block
            color #616161
        .prompt
          color #ff4500
          .prompt-o
            color #616161
            display inline-block
    .price
      float right
</style>