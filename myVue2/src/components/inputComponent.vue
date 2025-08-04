<template>
  <div>
    <input type="text" v-model="form.title">
    <textarea cols="30" rows="10" v-model="form.content"></textarea>
    <hr>
    使用 checkbox
    <input type="checkbox" v-model="form.isPost" value="发布" true-value="yes" false-value="no">发布
    <!--    <input type="checkbox" v-model="lessons" value="PHP" >PHP-->
    <!--    <input type="checkbox" v-model="lessons" value="Linux" >Linux-->
    <!--    <input type="checkbox" v-model="lessons" value="MySQL" >MySQL-->
    <hr>
    课程循环
    <label v-for="lesson in lessons" :key="lesson.title">
      <input type="checkbox" v-model="form.lessons" :value="lesson.value" >{{lesson.title}}
    </label>
    <hr>
    {{ form }}
    <hr>
    课程json：
    {{ lessons }}
  </div>
</template>

<script>

const form = {title: 'houdunren.com', content: '', 'isPost': false, lessons: []};

const lessons = [
  {title: "Linux入门", value: "Linux"},
  {title: "mysql入门", value: "mysql"},
  {title: "php入门", value: "php"},
];
export default {

  data() {
    return {
      form,
      lessons,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>