<template>
  <div class="lesson">
    <lesson v-for="item in db" :lesson="item" @del="show"/>
  </div>
</template>

<script>
import db from '../data/db.js'
import Lesson from "./components/Lesson.vue";

export default {
  components: {Lesson},
  data() {
    return {
      db,
    }
  },
  methods: {
    del(item) {
      console.log(item)

      const index = this.db.findIndex(l => l.id == item.id);
      this.db.splice(index, 1)
    },
    show(id) {
      const index = this.db.findIndex(l => l.id == id);
      console.log(index)
      this.db.splice(index, 1)
    }
  }

}
</script>

<style lang="scss" scoped>
.lesson {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}
</style>