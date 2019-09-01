const Home = () => import('pages/home');
// const Order = () => import('pages/order');
// const OrderDetail = () => import('pages/order-detail');
// const NoPermission = () => import('pages/no-permission');
const Test = () => import('pages/test');
const NotFound = () => import('pages/not-found');

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home,
  },
  // {
  //   path: '/order',
  //   name: '订单管理',
  //   component: Order,
  // },
  // {
  //   path: '/order-detail/:id',
  //   name: '订单详情',
  //   component: OrderDetail,
  // },
  // {
  //   path: '/no-permission',
  //   name: 'no-permission',
  //   component: NoPermission,
  //   // fullscreen: true, // 如果想要全屏展示这个页面（不展示侧边栏与顶栏），则fullscreen置为true
  // },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
];

export const fullScreenPath = routes
  .filter(e => e.fullscreen)
  .map(e => e.path.slice(0, e.path.indexOf('/:')));
export function checkFullScreenPath(pathname) {
  return fullScreenPath.some(e => pathname.startsWith(e));
}

export default routes;
