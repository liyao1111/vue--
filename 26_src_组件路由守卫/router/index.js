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
                    name: 'xinwen',
                    // 不要加 /
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    beforeEnter: (to, from, next) => {
                        console.log('独享守卫', to, from)
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('name') === 'tom') {
                                next()
                            } else {
                                alert('名字不匹配')
                            }
                        } else {
                            next()
                        }
                    }
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

export default router