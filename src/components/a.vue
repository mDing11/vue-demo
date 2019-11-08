<template>
<div class="a-style">
        <div class="router-col">
          <span class="router-space"> <router-link to="/d">订单</router-link></span>
          <span class="router-space"> <router-link to="/w">购物车</router-link></span>
         <span class="router-space"> <router-link to="/f">商铺</router-link></span>
           
        </div>

        <div>
         <router-view></router-view>
        </div>
</div>
</template>
<script>

</script>

<style>
.a-style{
    display:flex;
    flex-direction:row;
}

.router-col{
     display:inline-flex;
    flex-direction:column;
}
</style>