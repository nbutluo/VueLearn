<template>
  <div>
    <img :src="lesson.preview" alt="lesson.title"/>
    <h3 @dblclick="inputShow=true">
      <!--    <span @click="del" v-bind="$attrs">x</span>-->
      <!--    <span @click="$emit('del',lesson)">x</span>-->
      <input v-if="inputShow" type="text" id="lesson-input"
             :value="lesson.title"
             @input="$emit('update:modelValue',$event.target.value)"
             @blur="inputShow=false"
             @keyup.enter="inputShow=false"
      />
      <strong v-else> {{ lesson.title }}</strong>
    </h3>
    <h3 @dblclick="inputPriceShow=true">
      <input v-if="inputPriceShow" type="text" id="lesson-price-input"
             :value="lesson.price"
             @input="$emit('update:price',$event.target.value)"
             @blur="inputPriceShow=false"
             @keyup.enter="inputPriceShow=false"
      />
      <strong v-else> {{ lesson.price }}</strong>
    </h3>

    <span @click="del">x</span>

  </div>
</template>

<script>
export default {
  props: ['lesson', 'modelValue','price'],
  emits: {
    'update:modelValue': null,
    'update:price': null,
    del(v) {
      console.log(v)
      if (/^\d+$/.test(v)) {
        return true;
      }
      throw new Error('del emit 需要数值参数')
    },
  },
  methods: {
    del() {
      if (confirm('确认删除吗？')) {
        this.$emit('del', this.lesson.id);
      }
    },
  },
  data() {
    return {
      inputShow: false,
      inputPriceShow: false,
    }
  },
}
</script>

<style lang="scss" scoped>
div {
  border: solid 1px #ddd;
  text-align: center;
  transition: 1s;
  position: relative;

  &:hover {
    box-shadow: 0 0 20px #aaa;

    > span {
      opacity: 1;
    }
  }

  span {
    display: block;
    background-color: #666;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 12px;
    opacity: 0;
    transition: 1s;
  }

  h3 {
    padding: 0 0 20px 0;
    margin: 0;
    font-size: 16px;
  }

  img {
    width: 100%;
  }
}
</style>