<template>
  <div @scroll.self="d1" style="border: 1px solid green;height: 300px; overflow-y: auto">
    <div @click.alt.exact="d2" style="background-color: red;height: 200px">d2</div>
  </div>
  <a @click.passive="link" href="https://www.baidu.com" target="_blank">点击跳转到百度</a>
</template>

<script>
export default {
  methods: {
    d1() {
      console.log('d1')
    },
    d2() {
      console.log('d2')
    },
    link(event){
      console.log(event)
      // event.preventDefault();
    }
  }
}
</script>

<style lang="scss" scoped>

</style>