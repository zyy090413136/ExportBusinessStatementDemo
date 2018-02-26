<template>
  <div id="app">
    <keep-alive>
      <topbar class="top"></topbar>
    </keep-alive>
    <keep-alive>
      <leftmenu class="left"></leftmenu>
    </keep-alive>
    <mainbody class="main"></mainbody>
    <keep-alive>
      <bottombar class="bottom"></bottombar>
    </keep-alive>
  </div>
</template>

<script>
  import leftmenu from './views/leftmenu/leftmenu'
  import topbar from './views/topbar/topbar'
  import bottombar from './views/bottombar/bottombar'
  import mainbody from './views/mainbody/mainbody'
export default {
  name: 'App',
  components:{
    bottombar,
    topbar,
    leftmenu,
    mainbody,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 .top{
    height: 40px;
    width: 100%;
    margin-top: 0px;
  }
  .left{
    width: 10%;
    height: 90%;
    margin-top:40px;
    float:left;
  }
  .main{
    width:80%;
    height:90%;
    float:right;
  }
  .bottom{
    width: 80%;
    height: 40px;
    bottom: 40px;
    right: 0px;
    position: fixed;
  }
</style>
