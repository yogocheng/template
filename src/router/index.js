import Layout from '../components/Layout';
import NotFound from '../components/404/index';

export default [
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