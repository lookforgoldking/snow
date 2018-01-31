<template>
	<div>
  		<index-header></index-header>
  		<index-swiper :swiperInfo="swiper"></index-swiper>
      <icons></icons>
	</div>
</template>

<script>
import IndexHeader from './header'
import IndexSwiper from './swiper'
import Icons from './icons'
import axios from 'axios'

export default {
  name: 'index',
  data () {
  	return {
  		swiper: [],
      icons: []
  	}
  },
  components: {
  	IndexHeader,
  	IndexSwiper,
    Icons
  },
  methods: {
  	getIndexData(){
  		axios.get('/api/index.json')
  			.then(this.handleDataSucc.bind(this))
  			.catch(this.handleDataError.bind(this))
  		},
  		handleDataSucc(res){
  			this.swiper = res.data.data.slider,
        this.icons = res.data.data.slider
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
