<template>
	<div class="bottom">
		<div class="notice">
			<span class="notice-pic iconfont">&#xe60d;</span>
			<a class="highlight ">票面价</a>是指通过景区置顶窗口售卖的纸质门票上标注的价格
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bottom',
	}
</script>

<style lang="stylus" scoped>
	.bottom
		height 3.26rem
		.notice
			height .6rem
			padding-left .41rem
			font-size .22rem
			line-height .6rem
			color #5e5e5e
			position relative
			.notice-pic
				position relative
				left .13rem
				top .2rem
			.highlight
				font-weight 900
				font-size .22rem
				color #5e5e5e

</style>