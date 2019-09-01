import Router from 'vue-router';
// import store from 'store';
import routes from './routes';

// 用具体的相对路径引入，避免与utils循环引用

// function preProcess(to) {
//   let urlStr = to.fullPath;
//   if (urlStr) {
//     const item = blackList.find(e => e.url && e.url.test(urlStr));
//     if (item) {
//       item.action(urlStr, to);
//       return true;
//     }
//   }
// }

// function checkRoutePermission(pathname) {
//   // const availableMenuLinks = store.getters['user/availableMenuLinks'];
//   // return availableMenuLinks.includes(pathname);
//   return true;
// }

const router = new Router({
  // mode: 'history',
  // base: process.env.VUE_APP_BASEPATH, // 需在vue.config.js中设置
  routes,
});

// router.beforeEach(function(to, from, next) {
//   if (preProcess(to)) {
//     return;
//   }
//   // 带params的路由都是前端路由，不做校验
//   if (Object.keys(to.params).length) {
//     next();
//   } else if (to.path === '/test' && process.env.NODE_ENV === 'production') {
//     next('/not-found');
//   } else if (!checkRoutePermission(to.path)) {
//     console.warn('无页面权限 ', to.path);
//     next('/no-permission');
//   } else {
//     next();
//   }
// });

export default router;
