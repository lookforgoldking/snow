<template>
  <div class="fixed-title" v-show="show" ref="title">当前位置</div>
</template>

<script>
export default {
  name: 'fixed-title',
  data () {
    return {
      show: false
    }
  },
  methods: {
    setShow (flag) {
      this.show = flag
    },
    setMove (num, areaHtml) {
      this.$refs.title.style.top = (80 - num) + 'px'
      if (this.$refs.title.style.top !== '80px') {
        this.$refs.title.innerHTML = areaHtml
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/style/common/varibles.styl'
.fixed-title
  position: fixed
  top: 1.6rem
  left: 0
  right: 0
  z-index:1
  line-height: .54rem
  padding-left: .3rem
  font-size: .26rem
  color: #616161
  background: $bgSmallColor
</style>


