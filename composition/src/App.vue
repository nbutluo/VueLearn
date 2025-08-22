<template>
  <div>
    <count :init="3" @change="changeHandle"/>
    <br>
    {{ count }}
  </div>
</template>

<script>
import count from "./components/Count.vue";
import Count from "./components/Count.vue";
import {ref} from "vue";

export default {
  components: {Count},
  setup() {
    let count = ref(0);

    const changeHandle = (v) => count.value = v;
    return {
      count, changeHandle
    }
  }

}
</script>

<style lang="scss" scoped>

</style>