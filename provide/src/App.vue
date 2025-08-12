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

export default {
  components: {
    Weixin, Pay,

  },
  data() {
    return {
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