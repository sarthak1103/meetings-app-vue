import Router from 'vue-router';
import LoginPage from '@/components/pages/LoginPage.vue'
import RegisterPage from '@/components/pages/RegisterPage.vue'
import CalendarPage from '@/components/pages/CalendarPage.vue'



/**
 * EXERCISE: Read up on History API of browser
 */
const router = new Router({
    mode: 'history', // alternatively you can use 'hash' based routing (but history API based routing gives clean URLs)
    routes: [
        {
            name: 'home', // unique name for the route
            path: '/',
            component: RegisterPage
        },
        {
            name: 'LoginPage',
            path: '/login',
            component: LoginPage
        },
        {
            name:'CalendarPage',
            path: '/calendar',
            component: CalendarPage
        }
       
    ]
});

export default router;