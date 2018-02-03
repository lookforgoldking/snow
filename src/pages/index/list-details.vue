<template>
	<div class="details">
		<h2 class="title">周末去哪</h2>
		<div class="details-box" v-for="item in details" :key="item.id">
			<img class="details-img" :src="item.imgUrl" alt="">
			<p class="details-scenic">{{item.title}}</p>
			<span class="details-des">{{item.desc}}</span>
		</div>
		<div class="bg"></div>
	</div>
</template>
	
<script>
	export default {
		name: 'list-details',
		props:["details"]
	}
</script>

<style lang="stylus" scoped>
	.details
		min-height 17.29rem
		border-bottom ipx solid #e1e1e1
		.title
			height .8rem
			line-height .8rem
			background #f5f5f5
			font-size .26rem
			color #252525
			padding-left .26rem
		.details-box
			height 4.15rem
			.details-img
				height 2.81rem
				width 100%
			.details-scenic
				margin-top .25rem	
				padding-left .2rem
				color #212121
				font-size .26rem
			.details-des
				display block
				margin-top .19rem
				padding-left .2rem
				font-size .22rem
				color #747474
		.bg
			height .1rem
			background #f5f5f5
</style>