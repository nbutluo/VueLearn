<template>
  <div>
    向军大叔
    <div style="color: #2ecc71" @click="show(content)">
      <slot/>

    </div>
  </div>
</template>

<script>
export default {
  props: [
    'content',
  ],
  methods: {
    show(content) {
      console.log(`子组件:${content}`)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>