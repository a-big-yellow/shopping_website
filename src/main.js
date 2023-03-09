import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
// 按需引入element-ui
import { MessageBox, Button } from "element-ui";
Vue.use(Button.name, Button);
// 引入element-ui组件
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$msgbox = MessageBox;
// 引入swiper样式
import "swiper/css/swiper.css";
// 三级联动组件 ---全局组件
import TypeNav from "@/components/TypeNav";
// 关闭生产提示
Vue.config.productionTip = false;

// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);

import Carsousel from "@/components/Carousel";
Vue.component(Carsousel.name, Carsousel);
import Pagination from "@/components/Pagination";
Vue.component(Pagination.name, Pagination);

// 引入mockServe。js ---- mock数据
import "@/mock/mockServe";

// import atm from "@/assets/1.gif";
// 引入图片懒加载图片
// import VueLazyload from "vue-lazyload";
// 注册插件
// Vue.use(VueLazyload, {
//   loading: atm,
// });

// 统一接口api文件夹里面全部请求函数
// 统一引入
import * as API from "@/api";
new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //注册路由：底下的写法kv一致省略V
  router,
  store,
}).$mount("#app");
