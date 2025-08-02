<template>
  <template v-for="(lesson,index) in lessons" :key="index">
    <div v-if="lesson.isDelete" style="color: red"> {{ lesson.title }}</div>
    <div v-else-if="lesson.price>110" style="color: green"> {{ lesson.title }}</div>
    <div v-else>{{ lesson.title }}</div>
    <div v-show="lesson.price>200"> 测试</div>
  </template>
</template>

<script>
import lessons from '../../Data/lessons.js'

export default {
  data() {
    return {
      lessons,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>