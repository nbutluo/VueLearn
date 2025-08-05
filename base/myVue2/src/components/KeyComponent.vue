<template>
  <div>
    <div>按键事件</div>
<!--    <input type="text" @keyup.ctrl.k="key">-->
    <input type="text" @keyup.ctrl.k="key">
  </div>
</template>

<script>
export default {
  methods:{
    key(event) {
      console.log(event.key)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>