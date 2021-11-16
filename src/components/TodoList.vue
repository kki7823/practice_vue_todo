<template>
  <main>
    <div v-for="(todo, idx) in data" :key="todo.id">
      <div class="input_group my-2 input-group-sm">
        <div class="input-group-text">
          <input
              class="form-check-input mt-0"
              type="checkbox"
              :checked="todo.completed"
              :disabled="todo.completed"
              @click="completeTodo(todo.id)"
          />
        </div>
        <div class="input-group-text">
          <input
              class="form-input mt-0"
              type="date"
              :min="today"
              :value="todo.date"
          />
          <input type="text" class="form-control" :value="todo.job">
          <button
              class="btn btn-outline-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
          >
            할 일 관리
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li v-for="item in menu" :key="item.str">
              <a class="dropdown-item" @click="item.func(todo.id)">{{
                item.str
                }}</a>
            </li>
          </ul>
        </div>
        <div v-show="idx+1 < data.length" class="col border border-second"/>
      </div>
    </div>
  </main>
</template>

<script>
import {inject} from "vue";

export default {
  name: 'TodoList',
  props: {
    data: {
      type: Array,
      dafault: [],
    },
  },

  setup() {
    const removeTodo = inject('removeTodo')
    const completeTodo = inject('completeTodo')
    const today = inject('today')
    const menu = [
      {
        str: '할 일 삭제',
        func: removeTodo,
      },
      {
        str: '할 일 완료',
        func: completeTodo,
      },
    ]

    return {
      menu,
      today,
      completeTodo
    }
  },
}
</script>

<style scoped>

</style>