import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
// 封装游客身份的模块 uuid ---》生成一个随机字符串（不能改变了）
import { getUUID } from "@/utils/uuid_token";
const state = {
  goodInfo: {},
  // 游客临时身份
  uuid_token: getUUID(),
};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
const actions = {
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      commit("GETGOODINFO", result.data);
    }
  },
  // 加入购物车或者修改一个产品
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    // 发请求：前端带一些参数给服务器{需要存储这些数据}存储成功了，没有给返回数据
    // 不需要再三连环 （产库存储数据）
    if (result.code == 200) {
      // 返回的是成功
      return "ok";
    } else {
      // 返回失败的标记
      return Promise.reject(new Error("faile"));
    }
  },
};
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
