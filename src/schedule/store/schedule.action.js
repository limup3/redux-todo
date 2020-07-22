export const addTodoAction = todo =>({//액션과 액션생성기를 합친 구조.
    type: "ADD_TODO",
    payload:todo
})
export const toggleTodoAction = todoId=> ({
    type:"TOGGLE_TODO",
    payload:todoId
})
export const deleteTodoAction = todoId =>({
    type: "DELETE_TODO",
    payload:todoId
})