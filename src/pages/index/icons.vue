<template>
	<div class="icons">
		<swiper>
	    <swiper-slide>
	    	<div class="area-con">
	    		<div class="area-item" v-for = "item in iconsInfo" :key="item.id">
	    			<img class="area-img" :src="item.imgUrl" alt="">
	    			<p class="area-desc">{{item.title}}</p>
	    		</div>
	    	</div>
	    </swiper-slide>
	 	<div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
	export default {
		name: 'icons',
		props: ["iconsInfo"],
		data () {
			return {
				
			}
		},
		computed: {
		pageList() {
			const pages = [];
			this.list.forEach((value,index) => {
				const page = Math.floor(index / 8) 
			})
		}
	}
	}
	

</script>
<style lang="stylus" scoped>
	.icons
		overflow: hidden
		height 3.8rem
		border-bottom 1px solid #e0e0e0
		.area-con
			display flex
			flex-wrap wrap
			.area-item
				width 25%
				height 1.9rem
				.area-img
					display block
					margin .4rem auto .18rem
					width .66rem
					height .66rem
				.area-desc
					text-overflow ellipsis
					white-space nowrap	
					overflow hidden
					text-align center	
					font-size .26rem	
</style>