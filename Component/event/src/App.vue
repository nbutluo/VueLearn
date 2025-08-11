<template>
  <div class="lesson">
    <lesson v-for="item in db" :lesson="item" @del="show" v-model="item.title"  v-model:price="item.price"/>
    {{db[0].title}}
    <!--    <input type="text" :value="title" @input="title = $event.target.value">-->
    <!--    <input type="text" :value="title" @input="input">-->
    <!--    {{title}}-->
<!--    <hd-input :value="title" @update:value="change"/>-->

<!--    <hd-input :value="title" @update:value="title = $event"/>-->
  </div>
  <!--  <hr>-->
  <!--  <hd-input :value="title" />-->
<!--  <HdInput v-model:value="title"/>-->
<!--  <HdInput v-model="title"/>-->
<!--  &lt;!&ndash;  <br>&ndash;&gt;-->


<!--  父组件: {{ title }}-->

</template>

<script>
import db from '../data/db.js'
import Lesson from "./components/Lesson.vue";
import HdInput from "./components/HdInput.vue";


export default {
  components: {HdInput, Lesson},
  data() {
    return {
      db,
      title: '后盾人',
    }
  },
  methods: {
    change(v) {
      this.title = v;
    },
    // input(event){
    //   console.log(event.target.value);
    // },
    del(item) {
      console.log(item)

      const index = this.db.findIndex(l => l.id == item.id);
      this.db.splice(index, 1)
    },
    show(id) {
      const index = this.db.findIndex(l => l.id == id);
      console.log(index)
      this.db.splice(index, 1)
    },
  },

}
</script>

<style lang="scss" scoped>
.lesson {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}
</style>