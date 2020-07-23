import {} from 'redux-actions'
import produce from 'immer'
import {createAction, handleActions} from "redux-actions";

//액션
const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/TOGGLE'

export const changeInput = createAction(CHANGE_INPUT, input => input)
let id = 3
export const insert = createAction(INSERT, text=> ({id: id++, text, done: false}))
export const toggle = createAction(TOGGLE, id => id)
export const remove = createAction(REMOVE, id => id)

//스테이트
const initialState = {
    input: '',
    todos: [
        {
            id : 1,
            text : '리액트 학습',
            done : true
        },
        {
            id : 2,
            text : '리덕스 학습',
            done : false
        },
    ]
}

//리듀서
const todosReducer = handleActions({

    [CHANGE_INPUT]: (state, {payload: input})=> produce(state, x => {x.input = input}),
    [INSERT]: (state, {payload: todo})=> produce(state, draft => {draft.todos.push(todo)}),
    [TOGGLE]: (state, {payload: id})=> 
        produce(state, draft => {const todo = draft.todos.find(todo => todo.id === id)
                                 todo.done = !todo.done}),
    [REMOVE]: (state, { payload: id })=>
        produce(state, draft => {const index = draft.todos.findIndex(todo => todo.id === id)
                                 draft.todos.splice(index, 1)})
}, initialState)

export default todosReducer