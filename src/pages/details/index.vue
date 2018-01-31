<template>
  <div class="mix-box">
    <details-header></details-header>
    <details-introduce></details-introduce>
  </div>  
</template>

<script>
import DetailsHeader from './header'
import DetailsIntroduce from './introduce'

export default {
  name: 'index',
  components: {
  	DetailsHeader,
  	DetailsIntroduce
  }
}
</script>

<style lang="stylus" scoped>
  .mix-box
  	background #f5f5f5
</style>