import {
    createRouter,
    createWebHistory
} from 'vue-router'
// import Home from '../views/Home.vue'
// import AddProduct from '../views/AddProduct.vue'
// import AddPrdAmazon from '@/views/AddPrdAmazon.vue'
// import PrdDetail from '@/views/PrdDetail.vue'
// import PrdUpload from '@/views/PrdUpload.vue'
// import WelJoinPcpogo from '../views/WelJoinPcpogo'
// import JoinPcpogo from '../views/JoinPcpogo'
// import Contact from '../views/Contact'
//import Register from '../views/Register.vue'

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    // },
    // {
    //     path: '/register',
    //     name: 'register',
    //     meta: {
    //         requiresAuth: false,    //default: true
    //         showHeader: false,      //default: true
    //         showFooter: false,      //default: true
    //         keepAlive: true         //default: true
    //     },        
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import( /* webpackChunkName: "register" */ '../views/Register.vue')
    // },
    // {
    //     path: '/login',
    //     name: 'login',
    //     meta: {
    //         requiresAuth: false,    //default: true
    //         showHeader: false,      //default: true
    //         showFooter: false,      //default: true
    //         keepAlive: true         //default: true
    //     },        
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
    // },  
    // {
    //     path: '/forgetPwd',
    //     name: 'forgetPwd',
    //     meta: {
    //         requiresAuth: false,    //default: true
    //         showHeader: false,      //default: true
    //         showFooter: false,      //default: true
    //         keepAlive: true         //default: true
    //     },        
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import( /* webpackChunkName: "forgetPwd" */ '../views/ForgetPwd.vue')
    // },
    // {
    //     path: '/resetPwd',
    //     name: 'resetPwd',
    //     meta: {
    //         requiresAuth: false,    //default: true
    //         showHeader: false,      //default: true
    //         showFooter: false,      //default: true
    //         keepAlive: true         //default: true
    //     },        
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import( /* webpackChunkName: "resetPwd" */ '../views/ResetPwd.vue')
    // }, 
    // {
    //     path: '/verifyCode',
    //     name: 'verifyCode',
    //     meta: {
    //         requiresAuth: false,    //default: true
    //         showHeader: false,      //default: true
    //         showFooter: false,      //default: true
    //         keepAlive: true         //default: true
    //     },        
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import( /* webpackChunkName: "verifyCode" */ '../views/VerifyCode.vue')
    // },  
    // {
    //     path: '/otp',
    //     name: 'otp',
    //     meta: {
    //         requiresAuth: false,    //default: true
    //         showHeader: false,      //default: true
    //         showFooter: false,      //default: true
    //         keepAlive: true         //default: true
    //     },        
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import( /* webpackChunkName: "otp" */ '../views/Otp.vue')
    // },                    
    // {
    //     path: '/addProduct',
    //     name: 'addProduct',
    //     component: AddProduct,
    // },
    // {
    //     path: '/addPrdAmazon',
    //     name: 'addPrdAmazon',
    //     component: AddPrdAmazon
    // },
    // {
    //     path: '/prdDetail',
    //     name: 'prdDetail',
    //     component: PrdDetail
    // },
    // {
    //     path: '/prdUpload',
    //     name: 'prdUpload',
    //     component: PrdUpload
    // },
    // {
    //     path: '/WelJoinPcpogo',
    //     name: 'WelJoinPcpogo',
    //     component: WelJoinPcpogo
    // },
    // {
    //     path: '/JoinPcpogo',
    //     name: 'JoinPcpogo',
    //     component: JoinPcpogo
    // },
    // {
    //     path: '/JoinPcpogo',
    //     name: 'Contact',
    //     component: Contact,
    // },
    {path: '/JoinPcpogo',
        component: () => import('../views/JoinPcpogo.vue'),
        children: [{
            path: '',
            component: () => import('../views/Contact.vue')
        }]
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router