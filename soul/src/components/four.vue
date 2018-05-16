<template>
    <div>
      敬请期待
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data() {
        return {
          show: false,
          actions: [
            {
              name: '选项',
              callback: this.onClick
            },
            {
              name: '选项',
              subname: '描述信息'
            },
            {
              name: '选项',
              loading: true
            }
          ]
        };
      },

      methods: {
        onClick(item) {
          Toast(item.name);
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
