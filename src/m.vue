<template>
  <div id="app">
     <div class="tab">
       
             <span class="router-space"> <router-link to="/a">首页</router-link></span>
          
             <span class="router-space"> <router-link to="/b">新闻</router-link></span>
          
            <span class="router-space"> <router-link to="/c">详情</router-link> </span>
           
     </div>
    <div class="tab-content">
         <router-view></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-space {
  margin-right:10px;
}
</style>
