import { useReducer, useState } from "react";


const ACTION = {
    ADD: 'ADD_TODO'
}

const TodoList = (props) => {
    const reducer = (state, action) => {
        switch(action.type){
            case ACTION.ADD:
                return [...state, newTodo(action.payload.todo) ]
            default:
                return state
        }
    }

    const newTodo = (todo) => {
        return {id: Date.now(), todo, complete: false}
    }
    const [state, dispatch] = useReducer(reducer, [])
    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: ACTION.ADD, payload: {todo : todo} })
        setTodo('')
    }

    console.log(state)
    return ( 
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" required value={todo} onChange={(e)=> setTodo(e.target.value)}/>
                <button>Add Todo</button>
            </form>
            <h2>Todo List {state.length}</h2>
            {state.map(todo => (
                <p key={todo.id}>
                    {todo.todo}
                </p>
            ))}
        </div>
           

        </>
     );
}

export default TodoList




