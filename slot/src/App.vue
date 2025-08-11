<template>
  <div>
    <!--   <card>-->
    <!--     <input type="text" :value='sdsd' id='input-hd' />-->
    <!--   </card>-->

    <!--    <card>-->
    <!--      <hd-button/>-->
    <!--    </card>-->

    <card :content="content">
      <div @click="show">插槽</div>
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