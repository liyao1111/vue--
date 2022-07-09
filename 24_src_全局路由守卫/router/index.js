// 该文件专门创建整个应用的路由器
import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
const router = new VueRouter({
    routes: [
        // 一级路由
        {
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            // 嵌套路由
            children: [
                {
                    // 不要加 /
                    path: 'news',
                    component: News,
                    meta: { isAuth: false, title: '新闻' }
                },
                {
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: { title: '消息详情' },
                            // props第一种写法：值为对象，该对象中所有key-value都会以props形式传给Detail组件
                            // props:{a:1,b:'hello'}
                            // props第二种写法：值为布尔值，若为真，则将该路由组件收到的所有params参数 以props形式传给Detail组件
                            // props:true
                            // props第三种写法：值为函数
                            props(route) {
                                return { id: route.params.id, title: route.params.title }
                            }
                        }
                    ]

                }
            ]
        }
    ]
})
// 全局 前置 路由守卫 ———— 初始化、每次切换路由之前被调用
router.beforeEach((to, from, next) => {

    console.log('前置路由守卫', to, from)
    if (to.meta.isAuth) {  //判断路由是否需要权限控制
        if (localStorage.getItem('name') === 'jack') { // 权限控制的具体规则
            next()
        } else {
            alert('name错误')
        }
    } else {
        next()
    }
})
// 后置路由守卫  ———— 初始化、每次切换路由之前被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    if (to.meta.title) {            //修改网页title
        document.title = to.meta.title || 'vue-router'
    } else {
        document.title = 'vue-router'
    }
})
export default router