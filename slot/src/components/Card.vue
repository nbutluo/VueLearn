<template>
  <div>
    <header>
      <slot name="header"/>
    </header>
    <main>
      <slot/>
    </main>
    <footer>
      <slot name="footer"/>
    </footer>
  </div>
</template>

<script>
export default {
  props: [
    'content',
  ],
  methods: {
    show(content) {
      console.log(`子组件:${content}`)
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  border: solid 1px #ddd;

  header,
  main,
  footer {
    padding: 10px;
  }

  main {
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: #ddd;
  }
}
</style>