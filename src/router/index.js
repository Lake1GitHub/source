import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home'


export default [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/home/discover',
        name: 'discover',
        component: home
    }
]
