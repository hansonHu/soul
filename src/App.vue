<template>
  <div>
    <byHeader></byHeader>
    <router-view></router-view>
  </div>

</template>

<script>
  import byHeader from "./components/main/byHeader"

export default {
  name: 'App',
  components:{
    byHeader
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
