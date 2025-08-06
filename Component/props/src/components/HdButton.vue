<template>
  <div :class="[type]" :style="$attrs.style">
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
    type: {
      type: String,
      default: 'info'
    }
    // arr: {
    //   default() {   // 引用类型的必须使用函数方式定义默认值
    //     return [1, 2, 3]
    //   }
    // }
  },

}
</script>

<style lang="scss" scoped>
.success {
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

.danger {
  background-color: #e74c3c;
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

.info {
  background-color: #ddd;
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