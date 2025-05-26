import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'semantic-ui-css/semantic.css'

// Import Toast
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

// Configure Toast options
const toastOptions = {
    position: 'top-right',
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false
}

app.use(router)
app.use(Toast, toastOptions)

app.mount('#app')
