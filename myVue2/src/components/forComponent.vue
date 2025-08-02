<template>
<!--  <div v-for="n in 5" :key="n">{{n}}-->
<!--  </div>-->
  <div v-for="(value) in lessons">
    <template v-if="!value.isDelete">{{value.title}}</template>
  </div>
</template>

<script>

import lessons from '../../Data/lessons.js'
export default {
    data() {
      return {
        lessons
      }
    }
}
</script>

<style lang="sass" scoped>

</style>