<template>
  <div class="search-wrapper">
    <div class="search">
      <input class="search-input" type="text"
           placeholder="输入城市名或拼音" autofocus
           @input="handleInputChange">
    </div>
    <div class="search-list" v-show="showList" ref="list">
      <ul>
        <li class="search-item" v-for="item in filterResult">
          {{item.name || '无匹配城市'}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'city-search',
  props: {
    list: Object
  },
  data () {
    return {
      showList: false,
      filterResult: []
    }
  },
  computed: {
    result () {
      const result = []
      for (let i in this.list) {
        this.list[i].forEach((value) => {
          result.push({
            name: value.name,
            spell: value.spell
          })
        })
      }
      return result
    }
  },
  methods: {
    handleInputChange (e) {
      this.tempE = e
      this.debounce(this.inputChangeMethod, 50)()
    },
    inputChangeMethod () {
      const value = this.tempE.target.value.toLowerCase()
      if (value) {
        this.showList = true
        this.filterResult = this.result.filter((item) => {
          if (item.spell.indexOf(value) > -1 || item.name.indexOf(value) > -1) {
            return true
          }
        })
      } else {
        this.showList = false
      }
    },
    debounce (fn, delay = 30) {
      let timer
      return () => {
        if (timer) {
          clearTimeout(timer)
        } else {
          timer = setTimeout(() => {
            fn()
          }, delay)
        }
      }
    }
  },
  watch: {
    filterResult () {
      this.$nextTick(() => {
        this.scroll.refresh()
      }
      )
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.list)
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/style/common/varibles.styl'
.search-wrapper
  z-index: 2
.search
  z-index: 2
  display: flex
  justify-content: center
  height: .72rem
  background: $bgColor
  .search-input
    width: 95%
    height: .62rem
    line-height: .62rem
    text-align: center
    font-size: .24rem
    font-weight: 600
    color: $fontNormalColor
    padding: 0 .2rem
    border-radius: .06rem
    box-sizing: border-box
.search-list
  overflow: hidden
  z-index: 1
  position: absolute
  top: 1.62rem
  left: 0
  right: 0
  bottom: 0
  background: $bgSmallColor
  .search-item
    line-height: .8rem
    padding-left: .2rem
    background: #fff
    color: #333
</style>


