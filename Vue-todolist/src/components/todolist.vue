<template>
  <div>
    <li @click="handleOnclick">{{content}}</li>
  </div>
</template>

<script>
  export default {
    name: 'todolist',
    props: ['content', 'index'],
    methods: {
      handleOnclick() {
        this.$emit('delete', this.index);
      }
    }
  }
</script>

<style scoped>
  li {list-style-type: none;border: 1px solid red;margin: 10px;background-color: green;height: 33px }
</style>
