<template>
  <!--  <div @click="event(1,2,3,4,5)">-->
  <!--    {{num}}-->
  <!--  </div>-->
  <div @click="sum(1,2,3,$event)">
    {{ num }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    }
  },
  methods: {
    event(...args) {
      // console.log(...args,event);
      // console.log(event)
    },
    sum(...args) {
      console.log(args, event);
      this.num = args.reduce((s, n) => s + n, this.num)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>