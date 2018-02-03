<template>
  <div class="sidebar">
    <div class="sidebar-list">
        <div class="sidebar-item"
             v-for="item in alphabet" 
             :key="item"
             @touchstart="handleTouchStart(item)"
             @touchmove="handleTouchMove">
             {{item}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'city-sidebar',
  props: {
    list: Object
  },
  computed: {
    alphabet () {
      const arr = []
      for (let i in this.list) {
        arr.push(i)
      }
      return arr
    },
    areaTop () {
      return this.$refs.list.offsetTop + 80
    }
  },
  methods: {
    handleTouchStart (item) {
      this.$emit('changeLetter', item)
    },
    handleTouchMove (e) {
      let index = (Math.floor((e.touches[0].clientY - this.areaTop) / 20))
      index = index < 0 ? 0 : index
      index = (index >= this.alphabet.length) ? (this.alphabet.length - 1) : index
      this.$emit('changeLetter', this.alphabet[index])
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/style/common/varibles.styl'
.sidebar
 position: absolute
 top:1.6rem
 right:0
 bottom: 0
 width: .4rem
 .sidebar-list
   width:100%
   height: auto
   position: absolute
   top: 50%
   transform: translateY(-50%)
   .sidebar-item
     text-align: center
     line-height: .36rem
     color: $fontNormalColor
</style>


