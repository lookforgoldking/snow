<template>
  	<swiper :options="swiperOption">
    <!-- slides -->
	    <swiper-slide>
	    	<img class="slide-img" src="http://img1.qunarzz.com/piao/fusion/1711/5a/cb4a0ccffeb99b02.jpg_640x200_1b0b75b1.jpg" alt="">
	    </swiper-slide>
	    <swiper-slide>
	    	<img class="slide-img" src="http://img1.qunarzz.com/piao/fusion/1801/84/7e75679eb1f16402.jpg_640x200_08e6dba6.jpg" alt="">
	    </swiper-slide>
	     <swiper-slide>
	    	<img class="slide-img" src="http://img1.qunarzz.com/piao/fusion/1710/f5/57137c621d75ba02.jpg_640x200_b984ddf7.jpg" alt="">
	    </swiper-slide>
	    <swiper-slide>
	    	<img class="slide-img" src="http://img1.qunarzz.com/piao/fusion/1712/56/cc09a2717375e302.jpg_640x200_9cf5e3a8.jpg" alt="">
	    </swiper-slide>
	    <swiper-slide>
	    	<img class="slide-img" src="http://img1.qunarzz.com/piao/fusion/1712/14/64372bd7d720e502.jpg_640x200_bc71fce9.jpg" alt="">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
  	</swiper>
</template>
<script>
export default {
  	name: 'index-swiper',
  	data() {
  		return {
  			swiperOption:{
  				loop: true,
  				autoplay:2000
  			} 
  		}
  	}
}
</script>

<style lang="stylus" scoped>
	.slide-img
		width 100%
</style>
