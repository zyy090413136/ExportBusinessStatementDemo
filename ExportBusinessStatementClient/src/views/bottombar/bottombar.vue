<template>
  <el-row id="container" :span="24">
    <img class="left-image" :src="imageSrc"/>
    <i class="el-icon-menu"></i>
    <i class="el-icon-menu"></i>
    <i class="el-icon-menu"></i>
    <div class="block">
      <div class="demonstration">
        <span class="songname-style">{{songName}}</span>
        <span class="singer-style">{{singer}}</span>
        <span class="totalDuration-style">{{totalDuration}}</span>
        <span class="currentDuration-style">/{{currentDuration}}</span>
      </div>
      <el-slider class="slider-style" v-model="value1" @change=showValue()></el-slider>
    </div>
    <i class="el-icon-menu"></i>
    <i class="el-icon-menu"></i>
    <i class="el-icon-menu"></i>
    <el-badge :value=currentSongListCount>
      <i class="el-icon-menu"></i>
    </el-badge>
  </el-row>
</template>

<script>
    export default {
      name: "bottombar",
      data(){
        return {
          imageSrc: require('./../../assets/logo.png'),
          songName:'我还盼',
          singer:'薛之谦',
          value1:20,
          totalDuration:'03:00',
          currentDuration:'00:00',
          currentSongListCount:20,
        }
      },
      methods:{
        showValue(){
          console.log(this.value1)
        },
      }
    }
</script>

<style lang="scss" scoped>
  .container{
    width:100%;
    height:60px;
    i{
      width:40px;
      height:40px;
    }
  }
  .left-image{
    width: 60px;
    height: 60px;
    margin:0px auto;
  }
  .slider-style{
    width:600px;
    margin-top:10px;
  }
  .block{
    display: inline-block;
  }
  .demonstration{
    width: 600px;
  }
  .totalDuration-style,.currentDuration-style{
    font-size: 12px;
    margin-right: 0px;
  }
  .currentDuration-style{
    color: #00B7FF;
  }
</style>
<style>
  .el-row{
    background-color: azure;
    border-top:#999 1px solid;
  }
  .el-badge__content.is-fixed {
    position: absolute;
    top: 0;
    right: 10px;
    -webkit-transform: translateY(-50%) translateX(100%);
    transform: translateY(-50%) translateX(100%);
  }
  .el-badge__content {
    background-color: #999;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    border: 1px solid #fff;
  }
</style>
