<template>
  <div>
    <button>-</button>
    {{ num }}
    <button @click="add">+</button>
  </div>
</template>

<script>

import {ref} from "vue";

export default {
  setup() {
    let num = ref(2);

    let add = () => {
      console.log(num)
      num.value = num.value + 1;
    }

    return {num,add}
  },
  // methods: {
  //   add() {
  //     console.log(this.num)
  //     this.num++;
  //   },
  // },
}
</script>

<style lang="scss" scoped>

</style>