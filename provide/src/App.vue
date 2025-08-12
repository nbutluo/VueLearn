<template>
  <main>
    <div v-for="component in components" :key="component.name"
         :class="{ active: component.name == currentComponent }"
         @click="currentComponent = component.name">
      {{ component.title }}
    </div>
  </main>
  <component :is="currentComponent"/>
</template>

<script>
import Weixin from "./components/Weixin.vue";
import Pay from "./components/Pay.vue";
import {computed} from "vue";

export default {
  // provide:{
  //   webName:'后盾人',
  // },
  provide() {
    return {
      webName: '后盾人',
      teacher: computed(()=>this.teacher),  // 如果是从 data中获取值进行传递，则应该按照这种写法
    }
  },
  components: {
    Weixin, Pay,

  },
  data() {
    return {
      teacher: '玛利亚',
      currentComponent: 'weixin',
      components: [
        {
          name: 'weixin',
          title: '微信管理',
        },
        {
          name: 'pay',
          title: '在线支付',
        },

      ],
    }
  },

}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  margin-bottom: 15px;

  div {
    border: solid 1px #ddd;
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.5s;

    &.active {
      background: #16a085;
      color: #fff;
    }
  }
}
</style>