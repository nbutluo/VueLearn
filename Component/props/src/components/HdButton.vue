<template>
  <div>
    {{ content }}
  </div>
<!--  {{arr}}-->
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '确定'
    },
    // arr: {
    //   default() {   // 引用类型的必须使用函数方式定义默认值
    //     return [1, 2, 3]
    //   }
    // }
  },

}
</script>

<style lang="scss" scoped>
div {
  background-color: #2ecc71;
  display: inline-block;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  opacity: 0.6;
  font-size: 20px;
  padding: 5px 10px;

  &:hover {
    opacity: 1;
  }

}
</style>