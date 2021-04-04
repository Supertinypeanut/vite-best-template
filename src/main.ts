import { createApp } from "vue"
import App from "./App.vue"
import router from "@/routes"
import { store } from "@/store"
// import { setupProdMockServer } from '@/mockProdService'

// 引入全局样式
import 'normalize.css'
import "@/assets/styles/index.scss"

const app = createApp(App).use(router).use(store)

app.mount("#app")

// production mock server
// if (process.env.NODE_ENV === 'production') {
// 	setupProdMockServer()
// }
