import Index from './pages/index'
// import Detail from './pages/detail'
console.log()
const routes =  [
    {
        path: '/',
        name: 'index',
        component: Index,
        meta: {
            title: '首页'
        }
    },
    // {
    //     path: '/detail',
    //     name: 'detail',
    //     component: Detail,
    //     meta: {
    //         title: '详情'
    //     }
    // },
]

export { routes }