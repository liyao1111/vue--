// 该文件专门创建整个应用的路由器
import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
export default new VueRouter({
    routes: [
        // 一级路由
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            // 嵌套路由
            children: [
                {
                    // 不要加 /
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {name:'xiangqing',path:'detail/:id/:title',component:Detail}
                    ]

                }
            ]
        }
    ]
})