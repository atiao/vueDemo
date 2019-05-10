import Vue from 'vue'
import VueRouter from 'vue-router'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 路由数据
import routes from '../routerConfig'

// 导出路由 在 main.js 里使用
const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    // 进度条
    NProgress.start()
})

router.afterEach(to => {
    // 进度条
    NProgress.done()
    // 更改标题
    // util.title(to.meta.title)
})

export default router