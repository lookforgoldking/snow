<template>
  <div class="scroller" ref="scroll">
    <ul class="scroller-list">
      <transition name="loading">
        <div class="loading" v-show="isLoading">正在加载...</div>
      </transition>
      <li class="scroller-item" v-for="item in list" :key="item.id">
        <router-link :to="'/detail/' + item.id">
          <dl class="item-con border-bottom">
            <dt><img class="item-img" v-lazy="item.img" alt=""></dt>
            <dd class="item-dd">
              <h2 class="item-title">{{item.title}}</h2>
              <p class="item-desc">{{item.desc}}</p>
              <p class="item-price">
                <i class="yen">&yen;</i>
                <i class="price">{{item.price}}</i>
                <i class="text">起</i>
              </p>
            </dd>
          </dl>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'index-scroller',
  props: {
    sights: Array
  },
  data () {
    return {
      isLoading: false,
      isFetching: false,
      moreSights: [],
      pageNumber: 1
    }
  },
  watch: {
    list () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },
  computed: {
    ...mapState(['city']),
    list () {
      return this.sights.concat(this.moreSights)
    }
  },
  methods: {
    createScroller () {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: 2
      })
    },
    bindEvents () {
      this.scroll.on('scroll', this.handleScroll.bind(this))
      this.scroll.on('scrollEnd', this.handleScrollEnd.bind(this))
    },
    handleScroll (e) {
      if (e.y > 30 && !this.isLoading) {
        this.getListInfo()
        this.isLoading = true
      }
    },
    handleScrollEnd () {
      this.isLoading = false
    },
    getListInfo () {
      if (!this.isFetching) {
        this.isFetching = true
        axios.get('/api/sightlist.json?city=' + this.city + '&page=' + this.pageNumber)
        .then(this.handleGetListSucc.bind(this))
        .catch(this.handleGetListErr.bind(this))
      }
    },
    handleGetListSucc (res) {
      res && (res = res.data)
      if (res.data) {
        if (res.data.sights) {
          this.moreSights = this.moreSights.concat(res.data.sights)
          this.pageNumber += 1
        }
        this.isFetching = false
      } else {
        this.handleGetListErr()
      }
    },
    handleGetListErr () {
      this.isFetching = false
      console.log('获取景点数据失败')
    }
  },
  mounted () {
    this.createScroller()
    this.bindEvents()
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/style/common/varibles.styl'
@import '../../assets/style/common/mixins.styl'
.scroller
  flex: 1
  overflow: hidden
  .loading
    text-align: center
    color: $fontSmallColor
  .loading-enter-active, .loading-leave-active 
    transition: opacity .5s
  .loading-enter, .loading-leave-to
    opacity: 0
  .item-con
    display: flex
    width:100%
    padding: .24rem
    &::before
      border-color: #ccc
    .item-img
      width: 1.4rem
      height: 1.4rem
      margin-right: .24rem
    .item-dd
      flex: 1
      .item-title
        font-size: .3rem
        color: $fontLightColor
        margin: .04rem 0 .1rem 0
        ellipsis()
      .item-desc
        width:100%
        font-size: .28rem
        color: $fontSmallColor
        margin-bottom:.2rem
        ellipsis()
      .item-price
        color: $fontPriceColor
        .yen
          font-size:.12rem
        .price
          font-size: .36rem
        .text
          font-size: .26rem
          color: $fontSmallColor
</style>


