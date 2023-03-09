import { reqCartList, reqDeleteCartById, reqUpdataCheckedById } from "@/api";
const state = {
  cartList: [],
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  // 获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async UpdataCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdataCheckedById(skuId, isChecked);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 删除全部勾选的的产品
  deleteAllCheckedCart({ dispatch, getters }) {
    // context :小仓库 commit "提交mutation 修改state" getters：“计算属性” dispatch：“派发action” state “当前仓库数据”
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let Promise =
        item.isChecked == 1
          ? dispatch("deleteCartListBySkuId", item.skuId)
          : "";
      PromiseAll.push(Promise);
    });
    return Promise.all(PromiseAll);
  },
  updataAllCartIsChecked({ dispatch, getters }, isChecked) {
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let Promise = dispatch("UpdataCheckedById", {
        skuId: item.skuId,
        isChecked,
      });
      PromiseAll.push(Promise);
    });
    return Promise.all(PromiseAll);
  },
};
const getters = {
  cartList() {
    return state.cartList[0] || {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
