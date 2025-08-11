<template>
  <lesson v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" #default="{id}">
<!--    <button @click="del(lesson)"> 删除</button>-->
<!--    <template v-slot:default="slotProps">-->
<!--      <template v-slot:default="{id,content}">-->
<!--          <template #default="{id,content}">-->
<!--      {{slotProps}}&#45;&#45;{{slotProps['id']}}-->
<!--      {{id}}&#45;&#45;{{content}}-->
      <button @click="del(id)"> 删除</button>
<!--    </template>-->
  </lesson>
</template>

<script>
import lessons from './db.js'
import Lesson from "./components/Lesson.vue";

export default {
  components: {Lesson},
  data() {
    return {
      lessons,
    }
  },
  methods:{
    // del(lesson) {
    //   console.log(lesson)
    //   // let index = this.lessons.findIndex(l=>l.id==lesson.id)
    //   this.lessons.splice(index,1)
    // }

    del(id) {
      console.log(id)
      let index = this.lessons.findIndex(l=>l.id==id)
      this.lessons.splice(index,1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>