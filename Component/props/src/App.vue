<template>
  <hd-button :content="hdContent" type="success"  style="margin-right: 10px"/>
  <hd-button content="删除" type="danger" style="margin-right: 10px"/>
  <hd-button content="反馈" style="margin-right: 10px"/>
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