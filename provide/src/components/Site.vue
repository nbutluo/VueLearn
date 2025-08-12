<template>
  <card>
    <template v-slot:header>
      站点信息
    </template>
    <div>
      <x-input title="网站名称" v-model="config.site.title"/>
      <x-textarea  title="网站介绍" v-model="config.site.desc"/>
    </div>
  </card>
  {{config}}

</template>

<script>
import Card from "./Card.vue";
import XInput from "./XInput.vue";
import XTextarea from "./XTextArea.vue";

export default {
  inject: ['config',],
  components: {XTextarea, XInput, Card},
}
</script>

<style lang="scss" scoped>

</style>