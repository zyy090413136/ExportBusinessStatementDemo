<template>
  <div class="container">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <ul>
      <li v-for="item in items">
        <img :src="item.imageSrc">
        <span>{{item.str}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "recommendation",
      data(){
          return {
            items:[
              {
                imageSrc: require('./../../../assets/logo.png'),
                str:'私人FM'
              },
              {
                imageSrc: require('./../../../assets/logo.png'),
                str:'每日歌曲推荐',
              },
              {
                imageSrc: require('./../../../assets/logo.png'),
                str:'排行榜',
              }
            ]
          }
      }
    }
</script>

<style scoped>
  ul{
    display: table;
    margin-left: auto;
    margin-right: auto;
  }
  ul li{
    float:left;
    list-style:none; /* 将默认的列表符号去掉 */
    padding:0; /* 将默认的内边距去掉 */
    margin:0; /* 将默认的外边距去掉 */
    display:table-cell;
    img{
      width:40px;
      height:40px;
      display:inline-block;
      vertical-align: middle;
    }
    span{
      display:inline-block;
      vertical-align: middle;
      bottom: 0;
    }
  }
</style>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
