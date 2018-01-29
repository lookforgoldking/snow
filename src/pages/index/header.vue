<template>
  <div class="header">
    <div class="back iconfont">&#xe631;</div>
    <div class="search">
    	<span class="search-icon iconfont">&#xe623;</span>
    	请输入搜索内容
    </div>
    <div class="city">
    	乌鲁木齐
		<span class="omit iconfont">&#xe65a;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index-header'
}
</script>

<style lang="stylus" scoped>
  .header
   	display flex
   	height .88rem
   	line-height .88rem
   	background #00bcd4
   	color #fff
   	.back
   	 width .58rem
   	 text-align center
	.search
		flex 1
		height .6rem
		line-height .6rem
		background #fff
		color #e7e8ea
		padding-left .2rem
		margin .14rem .2rem
		border-radius .05rem
	.city
		padding-right .26rem
		.omit
			font-size .4rem
</style>
