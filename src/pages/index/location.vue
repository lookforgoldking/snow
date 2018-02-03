<template>
	<div class="location">
		<div class="box-T">
			<div class="loc-left iconfont">&#xe6e5;<span class="left-des">定位失败</span></div>
			<div class="loc-right"><span class="right-des">五折泡温泉</span></div>
		</div>
		<div class="box-B">
			热销推荐
		</div>
</div>
</template>
<script>
	export default {
		name: 'location'
	}
</script>
<style lang="stylus" scoped>
	.location
		height 1.77rem
		.box-T
			display flex
			height .97rem
			line-height .97rem
			.loc-left
				width 2.56rem
				border-right 1px solid #e0e0e0
				padding-left 1.18rem
				font-size .28rem
				.left-des
					padding-left .11rem
			.loc-right
				flex 1
				.right-des
					display block
					font-size .28rem
					text-align center
		.box-B
			height .8rem
			line-height .8rem
			background #f5f5f5
			padding-left .42rem
			font-size .26rem
			color #000
</style>