<template>
  <div class="header">
    这是我的首页
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'index'
}
</script>

<style lang="stylus" scoped>
  .header
    background red
    h2
      background pink
  
</style>
