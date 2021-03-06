import Vue from "vue";
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter)
const routes = [
        { path: '/',  redirect:'/a' },
        { path: '/a', 
          component: (resolve)=>require(["@/components/a.vue"], resolve),
          children: [
            {
              path: 'e',
              component: (resolve)=>require(["@/components/e.vue"], resolve) 
            },
            {
              path: 'w',
              component: (resolve)=>require(["@/components/w.vue"], resolve) 
            }
          ]
         },
        { path: '/b', component: (resolve)=>require(["@/components/b.vue"], resolve) },
        { path: '/c', component: (resolve)=>require(["@/components/c.vue"], resolve) }, // 子页面
        { path: '/d', component: (resolve)=>require(["@/components/d.vue"], resolve) } // 子页面
    
    ]

  const router = new VueRouter({
    routes 
  })

  router.beforeEach((to,from,next) => {
    //开始进度条
    console.log('进度条开始');
    NProgress.start();
    // 继续路由
    next();
    });

    router.afterEach(transition => {
    //结束进度条
    console.log('进度条结束');
    NProgress.done();
    });
    
  export default router