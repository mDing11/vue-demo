import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
       status:true
    },
    getters: {
       getStatus:state => {
          return state.status
      }
    },
    mutations: {
       setStatus(state, payload) {
            state.status=false
       }
    },
    actions: {
        _setStatus({ commit, state }, data){
            
        }  
    }
})