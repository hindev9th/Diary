import Home from '../pages/Home';
import Messages from '../pages/Messages';
import Profile from '../pages/Profile';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import config from '../config';

const routes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.messages,
        component: Messages,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
]
const pubRoutes = [
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.register,
        component: Register,
    },
]

export { routes, pubRoutes };