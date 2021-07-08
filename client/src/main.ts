import { createApp } from 'vue'
import App from './App.vue'
import RWire from 'rwire'

const app = createApp(App)

app.use(RWire)

app.mount('#app')
