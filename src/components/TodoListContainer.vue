<template>

</template>

<script>
import {provide, readonly, ref} from "vue";

export default {
  name: 'TodoListContainer',
  setup(){
    const todos = ref([])
    provide('todos', readonly(todos))
    const initTodo = () => {
      todos.value = init_todos
    }

    const addTodo = (todo, date) => {}
    const removeTodo = (todo, date) => {}
    const completeTodo = (todo, date) => {}

    provide('addTodo', addTodo())
    provide('removeTodo', removeTodo())
    provide('completeTodo', completeTodo())
  }
}
</script>

<style scoped>

</style>