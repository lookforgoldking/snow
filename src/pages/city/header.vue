<template>
  <div class="header">
    <div class="title">
      <span class="back iconfont"
            @click="handleBackClick">&#xe602;</span>
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'city-header',
  methods: {
    handleBackClick () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/style/common/varibles.styl'
  .header
    position: relative
    height: .88rem
    line-height: .88rem
    text-align: center
    font-size: .36rem
    color: #fff
    background: $bgColor
    .back
      position: absolute
      top:0
      left: 0
      height:.88rem
      width:.88rem
      text-align: center
      line-height: .88rem
      font-size: .44rem
      font-weight: blod
</style>


