<template>
  <card>
    <template v-slot:header>
      微信
    </template>
    <div>
      <x-input title="appid" v-model="config.wexin.appid"/>
      <x-textarea  title="secret" v-model="config.wexin.secret"/>
      <x-input title="老师" v-model="content"/>
    </div>
  </card>

</template>

<script>
import Card from "./Card.vue";
import XInput from "./XInput.vue";
import XTextarea from "./XTextArea.vue";

export default {
  inject: ['config'],
  components: {XTextarea, XInput, Card},
  data() {
    return {
      content:'向军老师'
    }
  },
  methods:{
    show() {
      alert("这是微信组件")
    }
  }
}
</script>

<style lang="scss" scoped>

</style>