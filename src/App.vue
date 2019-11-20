<template>
  <div id="app">
    <div class="tab-content">
        <span class="router-space"> <router-link to="a">首页</router-link></span>
        <span class="router-space"> <router-link to="b">详情</router-link></span>
         <span class="router-space"> <router-link to="c">个人</router-link></span>
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
