<template>
  <div class="container">
    <div class="iconback">
      <i class="el-icon-back"></i>
      <span>网易云音乐</span>
    </div>
    <div class="icons">
      <i class="el-icon-back"></i>
      <i class="el-icon-back"></i>
      <i class="el-icon-back"></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "topbar"
    }
</script>

<style lang="scss" scoped>
  .container{
    width:100%;
    height:40px;
    background-color: red;
    i{
      line-height: 40px;
      margin:0;
    }
    .iconback{
      float:left;
    }
    .icons{
      float:right;
    }
  }
</style>
