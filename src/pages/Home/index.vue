<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，不需要再次引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend />
    <!-- <Rank />
    <Like />
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor" />
    <brand /> -->
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";
export default {
  name: "MyHome",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    // 获取floor组件的数据
    this.$store.dispatch("getFloorList");
    this.$store.dispatch("getUesrInfo");
  },
  computed: {
    ...mapState({ floorList: (state) => state.home.floorList }),
  },
};
</script>

<style scoped>
</style>