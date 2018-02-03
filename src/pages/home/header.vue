<template>
  <div class="header">
      <div class="back iconfont">&#xe602;</div>
      <div class="search">
          <div class="search-con">
              <span class="iconfont">&#xe632;</span>
              输入城市/景点/游玩主题
          </div>
      </div>
      <router-link to="/city">
        <div class="city">{{city}}</div>
      </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'index-header',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style scoped lang='stylus'>
@import '../../assets/style/common/varibles.styl'
  .header
    display :flex
    align-items: center
    height: .88rem
    background : $bgColor
    .back
      width: .8rem
      line-height: .88rem
      font-size: .4rem
      color: #fff
      font-font-weight: 600
      text-align: center
    .search
      flex: 1
      margin-left: .1rem
      .search-con
        height: .6rem
        line-height: .6rem
        font-size: .3rem
        color: #ccc
        background: #ffffff
        border-radius: .06rem
        padding-left: .2rem
    .city
      position: relative
      max-width: 2rem
      line-height: .88rem
      font-size: .28rem
      color: #fff
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      padding: 0 .4rem 0 .2rem
      &::before
        position: absolute
        right: .16rem
        top: .4rem
        content: '\0020'
        width: 0
        height: 0
        border-left: .12rem solid transparent
        border-right: .12rem solid transparent
        border-top: .12rem solid #fff
</style>


