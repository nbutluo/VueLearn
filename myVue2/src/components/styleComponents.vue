<template>

  <section :class="$attrs.class"></section>
  <main></main>
  <div style="color: #fff" :style="[styles,hdstyle]">
    后端人
  </div>
</template>
<script>
export default {
  data() {
    return {
      styles: {
        backgroundColor: 'green',
        fontWeight: 'bold'
      },
    }
  },
  computed: {
    hdstyle() {
      return {
        fontSize: '28px',
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>