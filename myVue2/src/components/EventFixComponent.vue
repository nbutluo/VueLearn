<template>
  <div @click.once="d1" style="background-color:green; width: 600px">
    <div @click="d2" style="background-color: red;width: 200px">d2</div>
  </div>
  <a @click.prevent="link" href="http://www.baidu.com" target="_blank">点击跳转到百度</a>
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
      event.preventDefault();
    }
  }
}
</script>

<style lang="scss" scoped>

</style>