import Home from '@/components/pages/Home'
import Admin from '@/components/pages/Admin'
import Contact from '@/components/pages/Contact'
import Login from '@/components/pages/Login'

export default [
    { path: '/', component: Home},
    { path: '/admin', component: Admin, meta: { needAuth: true } },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
]