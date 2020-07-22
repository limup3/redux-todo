import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {addTodoAction} from "./store/schedule.action";
import uuid from 'uuid/v4'
const ToDoInput =()=>{
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()
    const addTodo = todo => dispatch(addTodoAction(todo))
    const handleChange = e =>{
        e.preventDefault()
        setTodo(e.target.value)
    }
    const submitForm = e =>{
        e.preventDefault()
        const newTodo ={
            todoId:uuid(),
            name:todo,
            Complete:false
        }
        addTodo(newTodo)//위에 newTodo를 넣어주면 State로들어간다, return이 없으면 컨슈머이다.
        setTodo("")
    }
    return <>
        <form onSubmit={submitForm} method="POST">
            <div className="row mt-3">
                <div className="form-group col-sm-8">
                    <input
                        type="text"
                        placeholder="Add a todo"
                        name="todo"
                        className="form-control"
                        value={todo}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-sm-4">
                    <button type="submit" className="btn btn-primary btn-md">
                        Add Todo
                    </button>
                </div>
            </div>
        </form>
    </>
}
export default ToDoInput