import { createApp } from 'vue'
import App from './App.vue'
// import { setupProdMockServer } from '@/mockProdService'

createApp(App).mount('#app')


// production mock server
// if (process.env.NODE_ENV === 'production') {
//   setupProdMockServer();
// }