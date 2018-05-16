<template>
  <div id="app">
    <header1></header1>
    <router-view></router-view>
    <footer1></footer1>
  </div>
</template>

<script>
  import header1 from "./components/header.vue"
  import footer1 from "./components/footer.vue"

export default {
  name: 'App',
  components: {
    header1,
    footer1
  }
}
</script>

<style>


</style>
