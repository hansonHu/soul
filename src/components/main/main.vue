<template>
  <div>

    <van-swipe :autoplay="3000" :show-indicators=false>
      <van-swipe-item>
        <img :src="data1[0].src" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img :src="data1[1].src" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img :src="data1[2].src" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>


</template>

<script type="text/ecmascript-6">


    export default {
    data(){

      return{
        data1:[
          {
            src:"../../static/img/1.jpeg"
          },
          {
            src:"../../static/img/2.jpeg"
          },
          {
            src:"../../static/img/3.jpeg"
          }
        ]
      }
    },
      methods: {

      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .van-swipe
    img
      width 100%
      height 3rem
</style>
