<template>
  <div>
    <input type="text" :value="content" @input="change">
    <div style="color: #2ecc71;display: inline-block">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      content: this.modelValue,
    }
  },
  methods: {
    change(event) {
      this.content = event.target.value;
      this.$emit('update:modelValue', this.content);
    },
  },
}
</script>

<style lang="scss" scoped>

</style>