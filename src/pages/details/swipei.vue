<template>
  <div class="swiper-igm">
    <swiper :options="{}">
      <swiper-slide v-for = "item in getlist" :key="item.id">
        <img class="area-img" :src="item.url" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'details-swipei',
  props: ['getlist']
}
</script>

<style lang="stylus" scoped>
  .swiper-igm
    position fixed
    top 0 
    left 0
    width 100%
    height 100%
    background #000
    .area-img
      display inline-block
      width 100%
      margin-top 38%
</style>