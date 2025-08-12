<template>
  <div>
    <label>
      <div>{{ title }}</div>
      <textarea name="" v-model="content"
                @input="$emit('update:modelValue',$event.target.value)"
                :rows="rowLine"
      ></textarea>
<!--      {{ content }}-->
    </label>

  </div>
</template>

<script>
export default {
  // props:['title','modelValue','rows'],
  props: {
    title: String,
    modelValue: String,
    rows: {
      type: Number,
      default: 3
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      content: this.modelValue,
      rowLine: this.rows,
    }
  },
  watch: {
    rows(v) {
      console.log(v)
      this.rowLine = v;
    },
  },
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

  textarea {
    border: solid 2px #ddd;
    padding: 5px 10px;
    color: #666;
    outline: none;
  }
}
</style>