<template>
  <lesson v-for="lesson in lessons" :key="lesson.id" :lesson="lesson"/>
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
}
</script>

<style lang="scss" scoped>

</style>