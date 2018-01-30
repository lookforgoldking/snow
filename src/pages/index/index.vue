<template>
	<div>
  		<index-header></index-header>
  		<index-swiper></index-swiper>
	</div>
</template>

<script>
import IndexHeader from './header'
import IndexSwiper from './swiper'
export default {
  name: 'index',
  components: {
  	IndexHeader,
  	IndexSwiper
  }
}
</script>

<style lang="stylus" scoped>

</style>
