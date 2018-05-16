<template>
    <div class="footerWrap">
      <ul class="footerUl clearfix">
        <li>
          <router-link to="/">
            <i class="van-icon van-icon-home"></i>
          </router-link>

        </li>
        <li>
          <router-link to="/two">
           <i class="van-icon van-icon-sign"><!----></i>
          </router-link>
        </li>
        <li>
          <router-link to="/three">
           <i class="van-icon van-icon-points"><!----></i>
          </router-link>
        </li>
        <li>
          <router-link to="/four">
           <i class="van-icon van-icon-member-day-privilege"><!----></i>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {

      data(){
        return{
          data1:[
            {
              class1:"van-icon-home",
              url:"/",
              class2:"active"
            },
            {
              class1:"van-icon-sign",
              url:"/two",
              class2:""
            },
            {
              class1:"van-icon-points",
              url:"/three",
              class2:""
            },
            {
              class1:"van-icon-member-day-privilege",
              url:"/four",
              class2:""
            },

          ]
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footerWrap
    width 100%
    height 3rem
    line-height 3.8rem
    position fixed
    bottom 0
    left 0
    .footerUl
      width 100%
      height 100%
      li
        float left
        width 25%
        height 100%
        text-align center
        background #9a9a9a
        a
          width 100%
          height 100%
          color: #000
          .van-icon
            font-size 1.5rem



</style>
