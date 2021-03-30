import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'
// import { setupProdMockServer } from '@/mockProdService'

// 引入全局样式
import '@/styles/index.scss'

const app = createApp(App).use(router)

app.mount('#app')

// production mock server
// if (process.env.NODE_ENV === 'production') {
//   setupProdMockServer();
// }