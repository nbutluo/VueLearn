<template>
  <div class="class-component">
    <div :class="[classLists,'package']">{{ name }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "这是后端组件",
      active: false,
    }
  },
  computed: {
    classLists() {
      return {
        current: true,
        hd: false,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.class-component {
  color: white;
  background-color:  rebeccapurple;

  .hd {
    font-size: 2em;
  }

  .current {
    color:white;
  }

  .package {
    font-weight: bold;
    font-size: 4em;
  }
}
</style>