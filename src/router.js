'use strict'

export default function(router){
    router.map({
        '/':{       //首页
            name:'home',
            component:require('./views/index.vue')
        },
        /* 404路由 */
        '*': {
            component: require('./views/index.vue')
        },
        '/signup':{               //首页
            name:'home',
            component:require('./views/signup.vue')
        },
        '/login':{               //首页
            name:'list',
            component:require('./views/login.vue')
        }
    })
}