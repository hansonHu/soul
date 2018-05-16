<template>
    <div>
      <van-swipe  :autoplay="3000" loop :show-indicators=false>
        <van-swipe-item v-for="(item,index) in data1" :key="index">
          <a href="javascript:;">
            <img :src="item.src" style="width: 100%;">
          </a>
        </van-swipe-item>
      </van-swipe>
      <div class="middle">

        其他内容敬请期待
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {

        data(){
            return{
                data1:[
                  {src:"../../static/img/1.jpg"},
                  {src:"../../static/img/2.jpg"},
                  {src:"../../static/img/3.jpg"},
                  {src:"../../static/img/4.jpg"}

                ]
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .van-swipe
      .van-swipe__track
        .van-swipe-item
          img
            width 100%
            height 15rem

</style>
