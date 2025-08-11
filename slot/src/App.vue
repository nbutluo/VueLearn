<template>
  <div>
    <!--   <card>-->
    <!--     <input type="text" :value='sdsd' id='input-hd' />-->
    <!--   </card>-->

    <!--    <card>-->
    <!--      <hd-button/>-->
    <!--    </card>-->

<!--    <card :content="content">-->
<!--&lt;!&ndash;      <div @click="show">插槽</div>&ndash;&gt;-->
<!--&lt;!&ndash;      <hd-button>保存</hd-button>&ndash;&gt;-->
<!--      <hd-button>提交</hd-button>-->
<!--    </card>-->

<!--  具名插槽  -->
    <card>
      <template v-slot:header>网站小贴</template>
      <div>后盾人是一个主张友好、分享、自由的技术交流社区。 请记住我们的口号</div>
      <template #footer>后盾人 人人做后盾</template>
    </card>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import HdButton from "./components/HdButton.vue";

export default {
  components: {HdButton, Card},
  data() {
    return {
      content: '父组件',
    }
  },
  methods: {
    show() {
      console.log(this.content)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>