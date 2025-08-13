<template>
  <div>
    <button @click="sub">-</button>
    {{ num }}
    <button @click="add">+</button>
  </div>
</template>

<script>

import {ref, watch, watchEffect} from "vue";

export default {
  setup() {
    let num = ref(2);

    let add = () => {
      console.log(num)
      num.value = num.value + 1;
    }

    let sub = () => {
      num.value--
    }

    // watch(num, (v) => {
    //   if (v <= 0) {
    //     num.value = 0
    //   }
    // })

    const stop = watchEffect(() => {
      console.log(num.value)
      if (num.value <= 0) {
        num.value = 0;
      }
    });

    // stop();
    return {num, add, sub}
  },
  // methods: {
  //   add() {
  //     console.log(this.num)
  //     this.num++;
  //   },
  // },
  // watch: {
  //   num(v) {
  //     if (v <= 0) {
  //       this.num = 0;
  //     }
  //   },
  // },
}
</script>

<style lang="scss" scoped>

</style>