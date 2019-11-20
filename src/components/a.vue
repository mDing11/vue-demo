<template>
<div class="a-style">
        <div class="router-col">
          <span class="router-space"> <router-link to="/a/e">订单</router-link></span>
          <span class="router-space"> <router-link to="/a/w">购物车</router-link></span>
         <span class="router-space"> <router-link to="/d">商铺</router-link></span>
        </div>
        <button @click="addCount">添加</button>
        <p>dispatch->action->commit->mutation:{{count}}</p>
        <p>getters->computed:{{count2}}</p>
        <p>状态：{{status}}</p>
        <div>
         <router-view></router-view>
        </div>
</div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'

export default{
computed:{
    count(){
        return this.$store.state.count;
    },
    ...mapState({
        count3:state => state.count+2,
        status:state => state.status
    }),
    ...mapGetters({
        count2:'getCount'
    })
},
methods:{
    addCount(){
        this.$store.dispatch('addCount');
    }
}
}


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