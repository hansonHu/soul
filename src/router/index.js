import Vue from "vue"
import VueRouter from "vue-router"
import main from "../components/main/main"
import two from "../components/two"


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
    }
  ]
})
