<template>
  <div>
    <div class="introduce-box">
      <div class="address">
        <span class="address-map iconfont">&#xe6e5;</span>
        {{address}}
        <span class="more-o iconfont">&#xe628;</span>
      </div>
      <div class="open-time">
        <span class="time-intrd iconfont">&#xe616;</span>
        {{opentime}}
        <span class="more-t iconfont">&#xe628;</span>
      </div>
    </div>
    <div class="comment">
      <span class="expression iconfont">&#xe63f;</span>
      <span class="evaluate iconfont">&#xe6b4; &#xe6b4; &#xe6b4; &#xe6b4; &#xe6b4;</span>
      <p class="eval">5.0分</p>
      <p class="eval-w">
        182372评论
        <span class="more-s iconfont">&#xe628;</span>
      </p>
    </div>
    <div class="notice" v-on:click="handleNoticeClick">
      <div class="notice-box">
        <span class="mark-l iconfont">&#xe629;</span>
          {{notice}}
        <span class="more-f iconfont">&#xe628;</span>
      </div>
    </div>
    <div class="notice-c" v-show="show"></div>
    <div class="box-o" v-show="show">
      <div class="prompt">
        <span class="horn iconfont">&#xe629;</span>
        景区公告
      </div>
      <div class="file">
        <p>除法定节假日，故宫博物院实行周一闭馆。</p>
      </div>
      <div class="close iconfont" v-on:click="handleCloseClick">&#xe60c;</div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'details-introduce',
  data () {
    return {
      address: '北京市东城区景山前街4号',
      opentime: '查看景点简介及开放时间',
      notice: '除法定节假日，故宫博物院实行周一闭馆。',
      show: false
    }
  },
  methods: {
    handleNoticeClick () {
      this.show = !this.show
    },
    handleCloseClick () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="stylus" scoped>
  .introduce-box
    position relative
    top -.1rem
    height 1.76rem
    border-radius .1rem .1rem 0 0
    padding .1rem .2rem 0 .2rem
    margin-bottom .1rem
    background #fff 
    .address
      line-height .88rem
      height .88rem
      position relative
      overflow hidden
      border-bottom .01rem solid #eee
      .address-map
        margin-right .2rem
        color #bbb
        font-size .16rem
      .more-o
        position absolute
        right 0
        color #ccc
        font-size .4rem
    .open-time
      line-height .88rem
      height .88rem
      position relative
      overflow hidden
      .time-intrd
        margin-right .2rem
        color #bbb
        font-size .16rem
      .more-t
        position absolute
        right 0
        color #ccc
        font-size .4rem
  .comment
    height .8rem
    background #fff
    line-height .8rem
    margin-bottom .2rem
    padding 0 .2rem 0 .2rem
    .expression
      color skyblue
      margin-right .1rem
    .evaluate
      color #ffb436
      font-size .16rem
      margin-right .3rem
    .eval
      display inline-block
      color #ffb436
    .eval-w
      color #bbb
      display inline-block
      float right
      .more-s
        font-size .4rem
        float right
        color #ccc
  .notice
    height .88rem
    background #fdeede
    padding 0 .2rem 0 .2rem
    line-height .88rem
    color #f1441a
    margin-bottom .2rem
    .more-f
      color #ccc
      font-size .4rem
      position absolute
      right .2rem
  .notice-c
    position fixed
    top 0 
    left 0
    width 100%
    height 100%
    background #fff
    opacity 0.9
    z-index 9
  .box-o
    position fixed
    top 2rem
    left 0
    z-index 9
    width 100%
    .prompt
      text-align center
      font-size .4rem
      color #f67353
    .file
      margin-top .9rem
      padding 0 .35rem 0 .35rem
      color #333
      word-wrap break-word
    .close
      position fixed
      width 100%
      height .4rem
      bottom .8rem
      text-align center
</style>