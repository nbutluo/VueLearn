<template>
  <div ref="el">
    {{ hd }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      hd: '子组件',
      timeId: null,
    }
  },
  created() {
    console.log(`子组件：created` + this.hd)
    console.log(this.$refs.el)

    this.timeId = setInterval(() => {
      console.log('定时器')
    }, 500)
  },
  beforeCreate() {
    console.log(`子组件：beforeCreate` + this.hd)  // 只有这个有正确输出
    console.log(this.$refs.el) // DOM还没有挂载
  },
  beforeMount() {
    console.log(`子组件：beforeMount` + this.hd) // beforeMount后盾人
    console.log(this.$refs.el)  // undefined
  },
  mounted() {
    console.log(`子组件：mounted` + this.hd)
    console.log(this.$refs.el)  // <div>后盾人</div>
  },
  beforeUnmount() {
    console.log(`子组件：beforeUnmount` + this.hd)
  },
  unmounted() {
    console.log(`子组件：unmounted` + this.hd)
    clearInterval(this.timeId)
  },
}
</script>

<style lang="scss" scoped>

</style>