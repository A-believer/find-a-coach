import { createApp } from 'vue'
import App from './App.vue'
import "./style.css"
import router from './router'
import store from './store'
import BaseCard from './components/BaseCard.vue'
import BaseButton from './components/BaseButton.vue'
import BaseBadge from './components/BaseBadge.vue'
import BaseSpinner from './components/BaseSpinner.vue'


const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-spinner', BaseSpinner)
app.use(store)
app.use(router)
app.mount('#app')
