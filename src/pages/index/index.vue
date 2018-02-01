<template>
	<div>
  		<index-header></index-header>
  		<index-swiper :swiperInfo="swiper"></index-swiper>
      <icons :iconsInfo="icons"></icons>
      <location></location>
      <list :list="list"></list>
      <list-details :details="details"></list-details>
      <bottom></bottom>
	</div>
</template>

<script>
import IndexHeader from './header'
import IndexSwiper from './swiper'
import Icons from './icons'
import Location from './location'
import List from './list'
import ListDetails from './list-details'
import Bottom from './bottom'
import axios from 'axios'

export default {
  name: 'index',
  data () {
  	return {
  		swiper: [],
      icons: [],
      list: [],
      details: []
  	}
  },
  components: {
  	IndexHeader,
  	IndexSwiper,
    Icons,
    Location,
    List,
    ListDetails,
    Bottom
  },
  methods: {
  	getIndexData(){
  		axios.get('/api/index.json')
  			.then(this.handleDataSucc.bind(this))
  			.catch(this.handleDataError.bind(this))
  		},
  		handleDataSucc(res){
  			this.swiper = res.data.data.slider
        this.icons = res.data.data.iconsList
        this.list = res.data.data.hotList
        this.details = res.data.data.recommendList
  		},
  		handleDataError(){
  			alert('error')
  		}
  },
  mounted(){
  	this.getIndexData();
	}
}
</script>

<style lang="stylus" scoped>

</style>
