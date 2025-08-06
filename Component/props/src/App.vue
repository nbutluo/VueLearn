<template>
  <hd-button :content="hdContent" type="success" style="margin-right: 10px"/>
  <button @click="hdContent ='向军大叔'">父组件</button>
  {{hdContent}}
  <hr>
<!--  <hd-button content="删除" type="danger" style="margin-right: 10px"/>-->
<!--  <hd-button content="反馈" style="margin-right: 10px"/>-->
<!--  <hd-button hd-tip="后盾" content="编辑" :disabled="true" style="margin-right: 10px"/>-->
<!--  <hd-button v-bind="{content:'测试',type:'success',style:'padding-top: 10px'}"/>-->
</template>

<script>
import hdButton from "./components/HdButton.vue";

export default {
  components: {hdButton},
  data() {
    return {
      hdContent: '保存提交'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>