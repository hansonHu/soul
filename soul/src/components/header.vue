<template>
    <div class="header1">
      hanson
      <i class="van-icon van-icon-wap-nav clearfix"  @click="topClick"></i>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {

      methods:{
        topClick(){
          alert("暂无内容")
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header1
    width 100%
    background black
    color: #fff
    text-align center
    font-size 1.5rem
    height 3rem
    line-height 3rem
    .van-icon
      float right
      width 1.5rem
      height 1.5rem
      padding  0.5rem


</style>
