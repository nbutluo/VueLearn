import {createApp} from 'vue'
import App from './App.vue'
import Card from "./components/Card.vue";
import XInput from "./components/XInput.vue";
import XTextarea from "./components/XTextarea.vue";

const app = createApp(App)
app.component('Card', Card)
app.component('x-input', XInput)
app.component('XTextarea', XTextarea)
app.mount('#app')
