<template>
    <div>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="哎" name="1">
          不知道写啥
        </van-collapse-item>
        <van-collapse-item title="你说" name="2">
         我写什么呢
        </van-collapse-item>
        <van-collapse-item title="还是" name="3">
          继续保留吧
        </van-collapse-item>
      </van-collapse>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data() {
        return {
          activeNames: ['1']
        };
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
