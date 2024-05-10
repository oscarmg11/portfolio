import { createApp } from 'vue'
import './style.css'
import App from 'src/App.vue'
import { createI18n } from 'vue-i18n'
import { es } from "src/locales/es.ts";

const app = createApp(App)
const i18n = createI18n({
    locale: navigator.language,
    fallbackLocale: 'es',
    messages: {
        es,
        en: {
            Hello: 'Hello'
        }
    }
})

app.use(i18n)
app.mount('#app')
