<template>
  <div>
    <label>
      <div>{{title}}</div>
      <input v-model="content" />
<!--      {{content}}-->
    </label>

  </div>
</template>

<script>
export default {
  props:['title','modelValue'],
  emits: ['update:modelValue'],
  data() {
    return{
      content:this.modelValue,
    }
  },
  watch:{
    content(v) {
      this.$emit('update:modelValue',v);
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  div {
    color: #666;
    font-size: 16px;
    margin-right: 10px;
    width: 100px;
  }
  input {
    border: solid 2px #ddd;
    padding: 5px 10px;
    color: #666;
    outline: none;
  }
}
</style>