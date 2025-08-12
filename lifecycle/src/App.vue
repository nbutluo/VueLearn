<template>
  <div ref="el">
    {{ hd }}
    <child ref="child" v-if="show"/>
    <button @click="show =!show">点击切换</button>
  </div>
</template>

<script>
import child from "./components/Child.vue";

export default {
  components: {
    child,
  },
  data() {
    return {
      hd: '后盾人',
      show:true,
      timeId:null
    }
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  },
  created() {
    console.log(`父组件：created` + this.hd)
    console.log(this.$refs.el)

    // setTimeout(() => {
    //   this.hd='向军大叔'
    // }, 2000);

  },
  beforeCreate() {
    console.log(`父组件：beforeCreate` + this.hd)  // 只有这个有正确输出
    console.log(this.$refs.el) // DOM还没有挂载
  },
  beforeMount() {
    console.log(`父组件：beforeMount` + this.hd) // beforeMount后盾人
    console.log(this.$refs.el)  // undefined
  },
  mounted() {
    console.log(`父组件：mounted` + this.hd)
    console.log(this.$refs.el)  // <div>后盾人</div>
  },
  beforeUpdate() {
    console.log(`父组件beforeUpdate` + this.hd)
    console.log(this.$refs.child)
  },
  updated() {
    console.log(`父组件updated` + this.hd)
    console.log(this.$refs.child)
  },
}
</script>

<style lang="scss" scoped>

</style>