<template>
  <div class="download" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'index-download',
  methods: {
    handleClick () {
      this.changeDownload(false)
    },
    ...mapMutations(['changeDownload'])
  }
}
</script>

<style scoped lang="stylus">
@import '../../../assets/style/common/varibles.styl'
.download
  z-index: 3
  position: fixed
  bottom: 0
  left: 0
  right: 0
  height: 1rem
  line-height: 1rem
  font-size: .26rem
  color: #fff
  background: rgba(0, 0, 0, .6)
</style>


