<template>
  <div class="container">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item  @click=changeCollapseState()>
        <i class="el-icon-d-arrow-right"></i>
      </el-menu-item>
      <el-menu-item index="1">
        <i class="el-icon-search"></i>
        <span slot="title">搜索</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">发现音乐</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">MV</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">朋友</span>
      </el-menu-item>
      <el-menu-item v-show="isCollapse" @click=changeCollapseState()>
        <i class="el-icon-d-arrow-right"></i>
      </el-menu-item>
      <el-menu-item-group index="5" v-show="!isCollapse" id="_myMusic">
          <span slot="title">我的音乐</span>
        <el-menu-item index="1-1"><i class="el-icon-search"></i>本地音乐</el-menu-item>
        <el-menu-item index="1-2"><i class="el-icon-search"></i>下载管理</el-menu-item>
        <el-menu-item index="1-1"><i class="el-icon-search"></i>最近播放</el-menu-item>
        <el-menu-item index="1-2"><i class="el-icon-search"></i>我的音乐云盘</el-menu-item>
        <el-menu-item index="1-1"><i class="el-icon-search"></i>我的电台</el-menu-item>
        <el-menu-item index="1-2"><i class="el-icon-search"></i>我的收藏</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group index="6" v-show="!isCollapse" id="_myList">
          <span slot="title">创建的歌单</span>
        <el-menu-item index="1-2"><i class="el-icon-search"></i>我喜欢的音乐</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      changeCollapseState(){
        this.isCollapse=!this.isCollapse;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">
  .root{
    width:200px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  el-menu-item{
    margin-left: 0px;
  }
  #_myMusic,#_myList{
    margin-top:30px;
  }
</style>
