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
      <div class="price">
        <span class="price-rmb">￥50</span>
        <span class="btn">预订</span>
      </div>
    </div>
    <div class="type-m">
      <div class="type-k">
        <h4 class="ticket-name">{{tie}}</h4>
        <div class="ticket-rule">
          <span class="rule iconfont">
            &#xe63a;
            <p class="rule-o">可订明日</p>
          </span>
          <span class="option iconfont">
            &#xe600;
            <p class="option-o">无购物</p>
          </span>
          <span class="cost iconfont">
            &#xe600;
            <p class="cost-o">无自费</p>
          </span>
        </div>
      </div>
      <div class="price">
        <span class="price-rmb">￥50</span>
        <span class="btn">预订</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details-recommend',
  data () {
    return {
      text: '去哪儿推荐',
      title: '【上午场】故宫成人票+故宫全景手绘地图',
      tie: '【寻踪紫禁城】北京故宫深度半日游丨资深导游+无线耳麦讲解器'
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
      display flex
      border-bottom .01rem solid #ddd
      .type-k
        width 5.2rem
        border-right .01rem solid #ddd
        .ticket-name
          margin-right .1rem
          line-height .56rem
          font-size .3rem
          margin-bottom .2rem
        .ticket-rule
          width 5.28rem
          height .32rem
          padding .04rem 0 .08rem 0
          .rule
            color #1ba9ba
            margin-right .24rem
            font-size .24rem
            .rule-o
              display inline-block
              color #616161
          .prompt
            color #ff4500
            font-size .24rem
            .prompt-o
              color #616161
              display inline-block
          .option
            color #1ba9ba
            font-size .24rem
            margin-right .24rem
            .option-o
              color #616161
              display inline-block
          .cost
            color #1ba9ba
            font-size .24rem
            .cost-o
              color #616161
              display inline-block
    .price
      flex 1
      height 1.12rem
      text-align center
      padding-top .48rem
      padding-left .2rem
      .price-rmb
        display block
        color #ff9800
        font-size .32rem
      .btn
        display block
        height .6rem
        line-height .6rem
        margin-right 0
        color #fff
        background #ff9800
        border-radius .1rem
</style>