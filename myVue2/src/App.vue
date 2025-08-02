<script>
import ClassComponent from "./components/classComponent.vue";
import LessonList from "./components/LessonList.vue";
import styleComponents from "./components/styleComponents.vue";
import VifComponent from "./components/vifComponent.vue";

export default {
  components: {VifComponent, LessonList, ClassComponent, styleComponents},
}

</script>

<template>
  <!--  <class-component />-->
  <!--  <LessonList/>-->
<!--  <style-components class="hd" />-->
  <vif-component/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
