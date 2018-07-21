<template>
  <div>
    <input type="text" v-model="inputValue" />
    <button @click="handleAdd">添加TodoList</button>
    <ul>
      <item-todolist
        v-for="(item,index) in list"
        :key="index"
        :content="item"
        :index="index"
        @delete="handleDelete">
      </item-todolist>
    </ul>
  </div>
</template>
<script>
  import ItemTodolist from './components/todolist'

  export default {
    name: 'App',
    data() {
      return {
        inputValue: '',
        list: []
      }
    },
    methods: {
      handleAdd() {
        this.list.push(this.inputValue);
        this.inputValue = '';
      },
      handleDelete(index) {
        this.list.splice(index, 1);
      }
    },
    components: {
      // "item-todolist": todolist
      ItemTodolist
    }
  }
</script>

<style>

</style>
