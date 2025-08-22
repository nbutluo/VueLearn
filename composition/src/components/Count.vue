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
  props: {
    init: {
      type: Number,
      default: 1,
    },
  },
  emits: ['change'],
  setup(props, context) {

    const {emit} = context;
    let num = ref(props.init);

    let add = () => {
      num.value = num.value + 1;
      emit('change', num.value)
    }

    let sub = () => {
      num.value--
      emit('change', num.value)
    }

    // watch(num, (v) => {
    //   if (v <= 0) {
    //     num.value = 0
    //   }
    // })

    const stop = watchEffect(() => {
      // console.log(num.value)
      if (num.value <= 0) {
        num.value = 0;
      }
      emit('change', num.value)
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