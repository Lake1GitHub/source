import App from '../App'
const home = r => require.ensure([], ()=>r(require('../pages/home.vue'), 'home'));
const toplist = r => require.ensure([], ()=>r(require('../pages/toplist/toplist.vue'), 'toplist'));
const playlist = r => require.ensure([], ()=>r(require('../pages/playlist/playlist.vue'), 'playlist'));
const djradio = r => require.ensure([], ()=>r(require('../pages/djradio/djradio.vue'), 'djradio'));
const content = r => require.ensure([], ()=>r(require('../pages/mainContent.vue'), 'main'));
const routes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/home',
                component: home,
            },
            {
                path: '/discover',
                component: content,
                children: [{
                    path: 'toplist',
                    component: toplist
                },{
                    path: 'playlist',
                    component: playlist,
                },{
                    path: 'djradio',
                    component: djradio
                }]
            },
            {
                path: '',
                component: home
            }
        ]
    }
]
export default routes
