import Vue from "vue";
// 配置路由的地方
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter);
import routes from "./routes";
// 引入路由

// 先把VueRouter原型对象等等Push，先保存一份
let originPush = VueRouter.prototype.push;

import store from "@/store";
// 重写一个路由
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

// 配置路由
let router = new VueRouter({
  routes,
  scrollBehavior() {
    return { y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  // 用户登录了才会有token
  next();
  let token = store.state.user.token;
  // 用户信息
  let name = store.state.user.userInfo.name;
  if (token) {
    //用户登录了,不能去login
    if (to.path == "/login") {
      next("/home");
    } else {
      //用户登陆了,而且还有用户信息【去的并非是login】
      if (name) {
        next();
      } else {
        //用户登陆了,但是没有用户信息
        try {
          //发请求获取用户信息以后在放行
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          //用户没有信息，还携带token发请求获取用户信息【失败】
          //token【学生证失效了】
          //token失效:本地清空数据、服务器的token通知服务器清除
          await store.dispatch("logout");
          //回到登录页，重新获取一个新的学生证
          next("/login");
        }
      }
    }
  } else {
    //用户未登录||目前的判断都是放行.将来这里会'回手掏'增加一些判断
    //用户未登录:不能进入/trade、/pay、/paysuccess、/center、/center/myorder  /center/teamorder
    let toPath = to.path;
    if (
      toPath.indexOf("trade") != -1 ||
      toPath.indexOf("pay") != -1 ||
      toPath.indexOf("center") != -1
    ) {
      next("/login?redirect=" + toPath);
    } else {
      next();
    }
  }
});
export default router;
