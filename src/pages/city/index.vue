<template>
  <div class="main">
    <city-header></city-header>
    <city-search :list="list"></city-search>
    <fixed-title ref="fixedTitle"></fixed-title>
    <city-list class="city-list"
               :list="list" 
               :hotcity="hotcity"
               ref="list"
               @scroll="handleListScroll"
               @fixchange="handleFixChange">
    </city-list>
    <city-sidebar :list="list" @changeLetter="handleLetterChange"></city-sidebar>
  </div>
</template>

<script>
import CityHeader from './header'
import CitySearch from './search'
import CityList from './list'
import CitySidebar from './sidebar'
import FixedTitle from './title'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CitySidebar,
    FixedTitle
  },
  data () {
    return {
      list: {},
      hotcity: []
    }
  },
  methods: {
    getListData () {
      axios.get('/api/city.json')
        .then(this.handleGetListSucc.bind(this))
        .catch(this.handleGetListErr.bind(this))
    },
    handleGetListSucc (res) {
      res && (res = res.data)
      if (res && res.data) {
        res.data.list && (this.list = res.data.list)
        res.data.hotcity && (this.hotcity = res.data.hotcity)
      } else {
        this.handleGetListErr()
      }
    },
    handleGetListErr () {
      console.log('获取城市列表失败')
    },
    handleLetterChange (item) {
      this.$refs.list.scrollToIndex(item)
    },
    handleListScroll (e) {
      this.$refs.fixedTitle.setShow(!(e.y > 0))
    },
    handleFixChange (num, areaHtml) {
      console.log(areaHtml)
      this.$refs.fixedTitle.setMove(num || 0, areaHtml)
    }
  },
  created () {
    this.getListData()
  }
}
</script>

<style scoped lang="stylus">
.main
  display: flex
  flex-direction: column
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  .city-list
    flex: 1
    overflow: hidden
    
</style>


