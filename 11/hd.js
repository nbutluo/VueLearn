const app = Vue.createApp({
    data() {
        return {
            name: "姓名1",
            id: "hdr",
            age:"年龄3",
            n: 2,
            value:"42"
        }
    }
})

const vm = app.mount("#app")

//
// setTimeout(()=>{
//     // vm.id = 'houdun.com'
//     // vm.name = {{n==1 ?"向军":“” }}
//     vm.name = "向军"
//     vm.arg = "href"
//     vm.value="https://www.baidu.com"
// },3000)

setTimeout(() => {
    vm.name = '向军大叔'
    vm.arg = 'href'
    vm.value = 'https://www.houdunren.com'
}, 2000)
