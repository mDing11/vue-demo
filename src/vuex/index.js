import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
       status:true,
       count:0
    },
    getters: {
       getStatus:state => {
          return state.status
      },
      getCount:state => {
         return state.count+1;
      }
    },
    mutations: {
       setStatus(state, payload) {
            state.status=false
       },
       setCount(state,num){
          state.count = num;
       }
    },
    actions: {
        _setStatus({ commit, state }, data){
            
        },
        addCount({commit,state}){
           commit('setCount',state.count+1)
        }  
    }
})