<template>
  <div class="main">
    <index-header></index-header>
    <index-slider :sliders="sliders"></index-slider>
    <index-icons :icons="icons"></index-icons>
    <div style="background: #f5f5f5">
      <ul class="listitem-con">
        <li class="listentrance-item">
          <span class="iconfont">&#xe603;</span>
          定位失败
        </li>
        <li class="listentrance-item">
          <span class="iconfont">&#xe627;</span>
          五折泡温泉
        </li>
      </ul>
    </div>
    <h2 class="hot-title">热销推荐</h2>
    <index-scroller :sights="sights"></index-scroller>
    <index-download v-show="showDownload">下载条</index-download>
  </div>
</template>

<script>
import IndexHeader from './header'
import IndexSlider from './slider'
import IndexIcons from './icons'
import IndexScroller from './scroller'
import IndexDownload from 'components/common/download/'
import axios from 'axios'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'index',
  data () {
    return {
      sliders: [],
      icons: [],
      sights: []
    }
  },
  components: {
    IndexHeader,
    IndexSlider,
    IndexIcons,
    IndexScroller,
    IndexDownload
  },
  computed: {
    ...mapState(['city', 'showDownload'])
  },
  watch: {
    city () {
      this.getIndexData()
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    getIndexData () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.handleDataSucc.bind(this))
        .catch(this.handleDataError.bind(this))
    },
    handleDataSucc (res) {
      res = res ? res.data : null // 打印出之后数据又包装在一层data中
      if (res && res.ret && res.data) {
        res.data.slider && (this.sliders = res.data.slider)
        res.data.icons && (this.icons = res.data.icons)
        res.data.sights && (this.sights = res.data.sights)
      } else {
        this.handleDataError()
      }
    },
    handleDataError () {
      console.log('error')
    }
  },
  mounted () {
    this.getIndexData()
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/style/common/mixins.styl'
.main
  display: flex
  flex-direction:column
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  .listitem-con,.activity-con 
    display: flex
    overflow: hidden
    width: 100%
    height: .97rem
    border-top: 1px solid #e0e0e0
    text-align: center
    line-height: .97rem
    background: #fff
  .listentrance-item
    float: left
    width: 50%
    height: 100%
    border-right: 1px solid #e0e0e0
    ellipsis()
  .listentrance-item:last-child, .activity-item:last-child
    border-right:0
  .hot-title 
    line-height: .8rem
    padding-left: .27rem
    font-size: .3rem
    background: #f5f5f5
</style>


