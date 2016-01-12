var Vue       = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var app = Vue.extend({});

var router = new VueRouter();

router.map({
    '/': {
        component: require('./views/home.vue')
    },
    '/signup': {
        component: require('./views/signup.vue')
    },
    '/login': {
        component: require('./views/login.vue')
    }
});

router.start(app, '#app');