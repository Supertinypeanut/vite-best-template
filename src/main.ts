import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'
// import { setupProdMockServer } from '@/mockProdService'

const app = createApp(App).use(router)

app.mount('#app')
// production mock server
// if (process.env.NODE_ENV === 'production') {
//   setupProdMockServer();
// }