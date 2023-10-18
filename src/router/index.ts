import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyIndex from '../views/MyIndex.vue'

const User = {
  props: ['username'],
  template: '<div>User {{username}}</div>'
}
const router = createRouter({
  // createWebHashHistory   可能是部署服务器方便
  //   createWebHistory
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        HomeView,
        MyIndex
      }
    },
    {
      path: '/index/:username?', //?表示参数可有可无
      name: 'myindex',
      component: MyIndex,
      meta: { test: 'testfor meta' },
      beforeEnter: (to, from) => {
        // reject the navigation可以单独控制某一个路由的跳转
        return true
      }
    },
    {
      path: '/about/', //strict: true,sensitive:true,
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]

  //   ,strict: true, // applies to all routes全局路径配置
})
// 前卫
router.beforeEach(async (to, from) => {
  // ...
  // 返回 false 以取消导航
  console.log('我离开' + from.path + '去向' + to.path)

  return true
})
router.afterEach((to, from, failure) => {
  console.log(to.fullPath)
})
export default router
