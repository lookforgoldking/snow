<template>
  <swiper class="icons" :options="swiperOption">
    <swiper-slide class="icons-page"
                  v-for="(page, index) of pages" 
                  :key="index">
      <div class="icons-list">
          <div class="icons-item" v-for="item in page" :key="item.id">
            <router-link to="/details">
              <img class="icons-img" :src="item.imgUrl">
              <p class="icons-title">{{item.title}}</p>
            </router-link>
          </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'index-icons',
  props: {
    icons: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((value, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }

  }
}
</script>

<style scoped lang='stylus'>
@import '../../assets/style/common/varibles.styl'
@import '../../assets/style/common/mixins.styl'
.icons >>> .swiper-pagination-bullet
  background: $bgColor
.icons
  width: 100%
  overflow: hidden
  height: 0
  padding-bottom: 3.88rem
  .icons-list
    display: flex
    flex-wrap: wrap
    .icons-item
      width: 25%
      padding-top: .4rem
      text-align: center
      .icons-img
        height: .66rem
        width: .66rem
      .icons-title
        padding-top: .2rem
        font-size: .28rem
        color: #333
        width:100%
        ellipsis()


</style>




