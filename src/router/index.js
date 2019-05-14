import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index'
import Detail from '../pages/detail'
import My from '../pages/my'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/detail',
        name: 'detail',
        component: Detail,
        meta: {
            title: '详情'
        }
    },
    {
        path: '/my',
        name: 'my',
        component: My,
        meta: {
            title: '我的'
        }
    },
]
// 导出路由 在 main.js 里使用
const router = new VueRouter({
    routes
})

export default router