<template>
  <div class="container">
    <p>发现音乐</p>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个性推荐" name="first">
        <recommendation></recommendation>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="second">歌单</el-tab-pane>
      <el-tab-pane label="主播电台" name="third">主播电台</el-tab-pane>
      <el-tab-pane label="最新音乐" name="fourth">最新音乐</el-tab-pane>
      <el-tab-pane label="歌手" name="fifth">歌手</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import recommendation from './../findMusic/recommendation/recommendation'
  import Recommendation from "../findMusic/recommendation/recommendation";
    export default {
      components: {Recommendation},
      name: "mainbody"
    }
</script>

<style scoped>
p{
  text-align: left;
  font-size: 12px;
  color:#999;
}
</style>
