<template>
  <div ref="wrapper">
    <div class="list">
      <div class="area" ref="current">
        <div class="title border-topbottom">当前位置</div>
        <div class="content">
          <div class="button button-current" @click="handleCityClick(city)">
            <div class="button-text button-active">
              {{city}}
            </div>
          </div>
        </div>
      </div>
       <div class="area" ref="hotcity">
        <div class="title border-topbottom">热门城市</div>
        <div class="content">
          <div class="button" 
              v-for="item in hotcity" :key="item.id"
              @click="handleCityClick(item.city)">
            <div class="button-text"
                 :class="{'button-active': item.city === city}">
              {{item.city}}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in list" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="content">
          <div class="content-item border-bottom"
               v-for="innerItem in item" :key="innerItem.id"
               @click="handleCityClick(innerItem.name)">
             {{innerItem.name}}
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'city-list',
  props: {
    list: Object,
    hotcity: Array
  },
  computed: {
    ...mapState({
      city (state) {
        return state.city || '北京'
      }
    }),
    areaPositions () {
      const arr = []
      arr.push(this.$refs.current.offsetTop)
      arr.push(this.$refs.hotcity.offsetTop)
      for (let i in this.list) {
        arr.push(this.$refs[i][0].offsetTop)
      }
      return arr
    },
    areaInnerHtml () {
      const str = []
      str.push(this.$refs.current.firstChild.innerHTML)
      str.push(this.$refs.hotcity.firstChild.innerHTML)
      for (let i in this.list) {
        str.push(this.$refs[i][0].firstChild.innerHTML)
      }
      return str
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    scrollToIndex (item) {
      this.scroll.scrollToElement(this.$refs[item][0])
    },
    handleScroll (e) {
      const y = -e.y
      let flag = false
      for (var i = 0; i < this.areaPositions.length; i++) {
        if (y > this.areaPositions[i] - 27 && y < this.areaPositions[i]) {
          const diff = y - this.areaPositions[i] + 27
          const areaHtml = this.areaInnerHtml[i]
          flag = true
          this.$emit('fixchange', diff, areaHtml)
          break
        }
      }
      !flag && this.$emit('fixchange')
      this.$emit('scroll', e)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3
    })
    this.scroll.on('scroll', this.handleScroll.bind(this))
  },
  activated () {
    this.scroll && this.scroll.refresh()
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/style/common/varibles.styl'
.area
  .title
    line-height: .54rem
    padding-left: .3rem
    background: $bgSmallColor
    color: #616161
    font-size: .26rem
  .content
    overflow: hidden
    padding: 0 .4rem .2rem .2rem
    .button
      float: left
      min-width: 33.33%
      .button-text
        line-height: .6rem
        margin: .2rem .1rem 0 .1rem
        border: .02rem solid #ccc
        border-radius: .06rem
        text-align: center
        padding: 0 .1rem
      .button-active
        color: $bgColor
        border-color: $bgColor
    .content-item
      line-height: .6rem

</style>


