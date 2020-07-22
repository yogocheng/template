import { Hello } from '@/components/Hello';
import NotFound from '@/components/NotFound';
import Home from '@/pages/Home';

interface IRouter {
    path: string,
    component?: any,
    exact?: boolean,
    routes?: Array<IRouter>,
    requiresAuth?: boolean,
}

const Router: IRouter[] = [
    {
        path: '/hello',
        exact: true,
        component: Hello,
        requiresAuth: false,
    },
    {
      path: '/home',
      exact: true,
      component: Home,
      requiresAuth: false,
    },
    {
        path: '/notfount',
        component: NotFound,
        requiresAuth: false,
    },
    {
      path: '*',
      component: NotFound,
      requiresAuth: false,
    }
];

export default Router;
