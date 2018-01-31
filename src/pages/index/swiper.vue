<template>
  	<swiper class="banner" >
    <!-- slides -->
	    <swiper-slide v-for="item in swiperInfo" :key="item.id">
	    	<img class="banner-img" :src="item.imgUrl" />
	    </swiper-slide>
	 	<div class="swiper-pagination"  slot="pagination"></div>
  	</swiper>
</template>
<script>
export default {
  	name: 'index-swiper',
  	props: ['swiperInfo'],
		data () {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
				}
			}
		}
}
</script>

<style lang="stylus" scoped>
	.banner                                                         
		height 0
		padding-bottom 31.25%
		overfloor hidden
		.banner-img
			width 100%
</style>
<style lang="stylus">
	.banner
		.swiper-pagination-bullet
			background #fff	
</style>
