/**
 * Created by admin on 2018/5/14.
 */
import Vue from "vue"
import VueRouter from "vue-router"
import main from "../components/main.vue"
import two from "../components/two.vue"
import three from "../components/three.vue"
import four from "../components/four.vue"

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:"/",
      component:main
    },
    {
      path:"/two",
      component:two
    },
    {
      path:"/three",
      component:three
    },
    {
      path:"/four",
      component:four
    }
  ]
})

