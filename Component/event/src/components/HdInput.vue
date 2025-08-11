<template>
  <div>
    <input type="text" :value="content" @input="change">
    <div style="color: #2ecc71;display: inline-block">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  emits: ['update:value'],
  data() {
    return {
      content: this.value,
    }
  },
  methods: {
    change(event) {
      this.content = event.target.value;
      this.$emit('update:value', this.content);
    },
  },
}
</script>

<style lang="scss" scoped>

</style>