<template>
  <div>
    {{ lesson.title }}
  </div>
</template>

<script>
export default {
  props: ['lesson']
}
</script>

<style lang="scss" scoped>
div {
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 10px;
}
</style>