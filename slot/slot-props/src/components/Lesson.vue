<template>
  <div>
    {{ lesson.title }}
    <slot :content="lesson.title" :id="lesson.id"/>
  </div>
</template>

<script>
export default {
  props: ['lesson'],
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 10px;
}
</style>