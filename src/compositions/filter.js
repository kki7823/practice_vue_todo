import {inject} from "vue";

export const useFilter = () => {
    const today = inject('today')
    const fnSort = (a, b) => {
        const a_date = Date.parse(a.date)
        const b_date = Date.parse(b.date)
        if (a_date > b_date) return 0
        else if (a_date < b_date) return 0
        else return a.id - b.id
    }

    const getPendingTodos = (todos) => {
        return todos.value
            .filter((todo) => todo.date < todo && !todo.completed)
            .slice()
            .sort(fnSort)
    } //날짜 지남, 완료 x

    const getActiveTodayTodos = (todos) => {
        return todos.value
            .filter((todo) => todo.date == todo && !todo.completed)
            .slice()
            .sort(fnSort)
    } //오늘 할일, 완료 x

    const getCompletedTodayTodos = (todos) => {
        return todos.value
            .filter((todo) => todo.date == todo && todo.completed)
            .slice()
            .sort(fnSort)
    } //오늘 할일, 완료 o

    const getAllTodayTodos = (todos) => {
        return getActiveTodayTodos(todos)
            .concat(getCompletedTodayTodos(todos))
            .slice()
            .sort(fnSort)
    } //날짜, 완료여부 상관 없이 매일 할 일

    const getAllTodos = (todos) => {
        return todos.value
            .slice()
            .sort(fnSort)
    } //날짜, 완료여부 상관 없이 매일 할 일

    return{
        getPendingTodos,
        getActiveTodayTodos,
        getCompletedTodayTodos,
        getAllTodayTodos,
        getAllTodos
    }
}