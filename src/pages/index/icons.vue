<template>
	<div class="icons">
		<swiper :options="swiperOption">
	    <swiper-slide>
	    	<div class="area-con">
	    		<div class="area-item"></div>
	    		<div class="area-item"></div>
	    		<div class="area-item"></div>
	    		<div class="area-item"></div>
	    		<div class="area-item"></div>
	    		<div class="area-item"></div>
	    		<div class="area-item"></div>
	    		<div class="area-item"></div>
	    	</div>
	    </swiper-slide>
	 	<div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
	export default {
		name: 'icons',
		data () {
			return {
				swiperOption: {
					pagination: '.swiper-pagination'
			}
		}
	}
}
</script>
<style lang="stylus" scoped>
	.icons
		height 3.8rem
		.area-con
			display flex
			flex-wrap wrap
			.area-item
				width 25%
				height 1.9rem
				background green
				
</style>