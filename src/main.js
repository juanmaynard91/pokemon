import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes'
import VueApexCharts from "vue3-apexcharts"; //barras

createApp(App)
    .use(router)
    .use(VueApexCharts)
    .mount('#app')
