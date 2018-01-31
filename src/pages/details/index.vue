<template>
  <div class="mix-box">
    <details-header></details-header>
    <details-introduce></details-introduce>
    <details-recommend></details-recommend>
  </div>  
</template>

<script>
import DetailsHeader from './header'
import DetailsIntroduce from './introduce'
import DetailsRecommend from './recommend'

export default {
  name: 'index',
  components: {
  	DetailsHeader,
  	DetailsIntroduce,
  	DetailsRecommend
  }
}
</script>

<style lang="stylus" scoped>
  .mix-box
  	background #f5f5f5
</style>