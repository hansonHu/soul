<template>
  <div class="header">
    <van-nav-bar
      class="header"
      title="hanson"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      methods: {
        onClickRight() {
          this.$router.push({path: '/two'});
        },
        onClickLeft(){
          this.$router.push({path: '/two'});
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .header
    background black
    color: #fff

</style>
