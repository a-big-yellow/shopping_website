// 先引入mockjs模块
import Mock from "mockjs";
// 吧json数据格式引入进来
import banner from "./banner.json";
import floor from "./floor.json";
import address from "./address.json";

Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
Mock.mock("/mock/address", { code: 200, data: address });
