<template>
  <div>
<!--   <card>-->
<!--     <input type="text" :value='sdsd' id='input-hd' />-->
<!--   </card>-->

    <card>
      <hd-button/>
    </card>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import HdButton from "./components/HdButton.vue";
export default {
  components:{HdButton, Card}
}
</script>

<style lang="scss" scoped>

</style>