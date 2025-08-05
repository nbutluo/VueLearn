<template>
  <div v-for="val in arr">
    {{ val}}
  </div>
</template>

<script>

const arr = ['houdunren.com']
export default {
    data() {
      return {
        arr
      }
    },
  mounted() {
      setTimeout(()=>{
          // this.arr.push('向军')
        this.arr.slice(0,1)
      },3000)

  }
}
</script>

<style lang="scss" scoped>

</style>