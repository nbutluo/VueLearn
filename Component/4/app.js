import Todo from "./Components/Todo.js";

const app = Vue.createApp({
    components:{Todo},
    data() {
        return {
            title:'后盾人'
        }
    }
})

app.mount('#app')

export default app