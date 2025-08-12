<template>
  <card>
    <template v-slot:header>
      微信
    </template>
    <div>
      <x-input title="微信号" v-model="appName"/>
      <x-textarea  title="文本内容"/>
    </div>
  </card>

</template>

<script>
import Card from "./Card.vue";
import XInput from "./XInput.vue";
import XTextarea from "./XTextArea.vue";

export default {
  inject: ['webName', 'teacher'],
  components: {XTextarea, XInput, Card},
  data() {
    return {
      appName: "向军大叔",
      price: 23,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>