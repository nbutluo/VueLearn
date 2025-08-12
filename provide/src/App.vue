<template>
  <main>
    <div v-for="component in components" :key="component.name"
         @click="currentComponent = component.name">
      {{ component.title }}
    </div>
  </main>
  {{ currentComponent }}

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

  div {
    border: 1px solid #dddddd;
    padding: 10px;
    margin: 5px 10px;
    cursor: pointer;
  }
}
</style>