<template>
  <div id="app">
    <!-- <home></home> -->
    <router-view v-if="checkFullScreenPath($route.path)"></router-view>
    <keep-alive v-if="shouldRouterKeepAlive($route.path)">
      <router-view :key="$route.path+$route.params.id"
                   v-if="initialized">
      </router-view>
    </keep-alive>
    <router-view v-else-if="initialized"
                 :key="$route.path+$route.params.id">
    </router-view>
  </div>
</template>

<script>
// ====================== Setup Global Plugins and Components ======================
import router from './router';
import { checkFullScreenPath } from './router/routes';

// ====================== Load Global CSS ======================
// import 'iview/dist/styles/iview.css';
// import "reset-css";

// import Home from 'pages/home'

export default {
  name: 'App',
  components: {
    // Home
  },
  router,
  data(){
    return {

    };
  },
  computed: {
    initialized() {
      // 是否初始化完成 // 已初始化的
      return true;
    },
  },
  methods: {
    checkFullScreenPath,
    // eslint-disable-next-line
    shouldRouterKeepAlive(path) {
      // 路由该不该缓存
      return true;
    },
  }
}
</script>

<style type="text/css">
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font: normal;
  }
</style
>>

<style lang='scss' scoped>
@import './themes/common.scss';

</style>
