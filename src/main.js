import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// require videojs style
import VueVideoPlayer from './components/video-player'
import 'video.js/dist/video-js.css'
import '../src/components/video-player/custom-theme.css'
import "echarts"
import ECharts from "vue-echarts"
import './socket/index'
import VueECharts from 'vue-echarts'

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})



createApp(App).use(store).use(router).use(VueVideoPlayer).use(ElementPlus).use(ECharts).component('v-chart',VueECharts).mount('#app')
