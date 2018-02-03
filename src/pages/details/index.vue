<template>
  <div class="mix-box">
    <details-header v-on:click.native="handleClickShow"></details-header>
    <details-introduce></details-introduce>
    <details-recommend></details-recommend>
    <details-today></details-today>
    <details-adult></details-adult>
    <details-student></details-student>
    <details-oldman></details-oldman>
    <details-swiper v-show='show'
                    v-on:click.native='handleClickShow'
                    :getlist='swiper'>
                      
    </details-swiper>
  </div>  
</template>

<script>
import DetailsHeader from './header'
import DetailsIntroduce from './introduce'
import DetailsRecommend from './recommend'
import DetailsToday from './today'
import DetailsAdult from './adult'
import DetailsStudent from './student'
import DetailsOldman from './oldman'
import axios from 'axios'
import DetailsSwiper from './swipei'

export default {
  name: 'index',
  data () {
    return {
      swiper: [],
      show: false
    }
  },
  components: {
    DetailsHeader,
    DetailsIntroduce,
    DetailsRecommend,
    DetailsToday,
    DetailsAdult,
    DetailsStudent,
    DetailsOldman,
    DetailsSwiper
  },
  methods: {
    getListInfo () {
      axios.get('/api/details.json')
        .then(this.handlegetListSucc.bind(this))
        .catch(this.handlegetListerror.bind(this))
    },
    handlegetListSucc (res) {
      this.swiper = res.data.data.swiperlist
      console.log(this.swiper)
    },
    handlegetListerror () {
      console.log('error')
    },
    handleClickShow () {
      this.show = !this.show
    }
  },
  mounted () {
    this.getListInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .mix-box
  	background #f5f5f5
</style>