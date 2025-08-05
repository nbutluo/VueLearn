export default  {
    props : ['data'],
    data() {
        return {
            content: "todo"
        }
    },
    template: `<div style="background-color: #646cff;color:#fff;margin-bottom: 20px">{{data.title}}</div>`
}