export default [
  {
    path: "/center",
    component: () => import("@/pages/Center"),
    meta: { show: true },
    children: [
      {
        path: "myorder",
        component: () => import("@/pages/Center/myOrder"),
      },
      {
        path: "grouporder",
        component: () => import("@/pages/Center/groupOrder"),
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: "/paysuccess",
    component: () => import("@/pages/PaySuccess"),
    meta: { show: true },
  },
  {
    path: "/pay",
    component: () => import("@/pages/Pay"),
    meta: { show: true },
    // beforeEnter(to, from, next) {
    //   if (from.path == "/trade") {
    //     next();
    //   } else {
    //     next(false);
    //   }
    // },
  },
  {
    path: "/trade",
    component: () => import("@/pages/Trade"),
    meta: { show: true },
    // beforeEnter: (to, from, next) => {
    //   if (from.path == "/shopcart") {
    //     next();
    //   } else {
    //     next(false);
    //   }
    // },
  },
  {
    path: "/shopcart",
    component: () => import("@/pages/ShopCart"),
    meta: { show: true },
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: () => import("@/pages/AddCartSuccess"),
    meta: { show: true },
  },
  {
    path: "/detail/:skuId?",
    component: () => import("@/pages/Detail"),
    meta: { show: true },
  },
  {
    path: "/home",
    component: () => import("@/pages/Home"),
    meta: { show: true },
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: () => import("@/pages/Search"),
    meta: { show: true },
  },
  {
    path: "/login",
    component: () => import("@/pages/Login"),
    meta: { show: false },
  },
  {
    path: "/register",
    component: () => import("@/pages/Register"),
    meta: { show: false },
  },

  {
    path: "*",
    redirect: "/home",
  },
];
