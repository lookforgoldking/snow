<template>
	<div class="list">
		<div class="list-inf" v-for="item in list" :key="item.id">
			<div class="inf-left">
				<img class="inf-img" :src="item.imgUrl" alt="">
			</div>
			<div class="inf-right">
				<h2 class="inf-h2">{{item.title}}</h2>
				<li class="inf-li">{{item.desc}}</li>
				<div class="inf-box">
					¥
					<span class="inf-pri">{{item.price}}</span>
					<a class="qi" href="#">起</a>
				</div>
			</div>
		</div>
		<div class="more">查看所有产品</div>
	</div>
</template>

<script>
	export default {
		name: "list",
		props:{
			list:Array
		}
}
</script>

<style lang="stylus" scoped>
.list
	min-height 10.25rem
	overfloor hidden
	.list-inf
		display flex
		height 1.47rem
		border-bottom 1px solid #e1e1e1
		padding .2rem
		.inf-left
			height 1.4rem
			width 1.6rem
			.inf-img
				width 1.4rem
				height 1.4rem
		.inf-right
			flex 1
			height 1.4rem
			.inf-h2
				font-size .28rem
				color #222
			.inf-li
				font-size .16rem
				color #9e9e9e
				margin-top .19rem
			.inf-box
				margin-top .25rem
				color #ff7a00
				font-size .18rem
				.inf-pri
					font-size .36rem
				.qi
					font-size .22rem
					color #9c9c9c
	.more
		font-size .26rem
		color #32c7db
		line-height .86rem
		text-align center
</style>