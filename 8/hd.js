const app = Vue.createApp({
    data() {
        return {
            name: "这是测试呀",
            lessons:window.lessons
        };
    }
})

const vm = app.mount("#app")