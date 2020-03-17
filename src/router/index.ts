import Layout from '../components/Layout';
import NotFound from '../components/404';

interface IRouter {
  path: string,
  component: any,
  exact?: boolean,
}

const Router: IRouter[] = [
  {
    path: '/',
    component: Layout,
    exact:true,
  },
  {
    path: '*',
    component: NotFound,
  }
]

export default Router;