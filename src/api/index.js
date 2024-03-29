// 当前这个模块：API进行统一管理
import requests from "./requset";
import mockRequests from "./mockAjax";
// 三级联动接口
//  /product/getBaseCategoryList
// 发送axios请求结果返回Promise对象
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });

export const reqGetBannerList = () => mockRequests.get("/banner");

export const reqFloorList = () => mockRequests.get("/floor");

export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });

export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });

export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });
//获取购物车列表数据接口
export const reqCartList = () =>
  requests({ url: "/cart/cartList", method: "get" });
// 删除购物车产品接口
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });
// 修改商品选中状态
export const reqUpdataCheckedById = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });
// 获取验证码
export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });
// 注册
export const reqUserRegister = (data) =>
  requests({ url: "/user/passport/register", data, method: "post" });
// 登入接口
export const reqUserLogin = (data) =>
  requests({ url: "/user/passport/login", data, method: "post" });

// 获取用户的信息
export const reqUserInfo = () =>
  requests({ url: "/user/passport/auth/getUserInfo", method: "get" });

// 退出登录
export const reqUserLogout = () =>
  requests({ url: `/user/passport/logout`, method: "get" });
//获取用户地址
export const reqAddressInfo = () => mockRequests.get("/address");

// 获取商品清单
export const reqOrderInfo = () =>
  requests({ url: "/order/auth/trade", method: "get" });
// 提交订单的接口
export const reqSubmitOrder = (tradeNo, data) =>
  requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: "post",
  });

// 获取支付信息
export const reqPayInfo = (orderId) =>
  requests({ url: `/payment/weixin/createNative/${orderId}`, method: "get" });

// 获取支付状态
export const reqPayStatus = (orderId) =>
  requests({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: "get",
  });

// 获取个人中心的数据

export const reqMyOrderList = (page, limit) =>
  requests({ url: `/order/auth/${page}/${limit}`, method: "get" });
