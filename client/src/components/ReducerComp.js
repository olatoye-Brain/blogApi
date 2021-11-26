import {  useReducer } from 'react'


export const ReducerComponent = () => {
    const ACTION = { 
        ADD: 'add',
        SUBTRACT: 'subtract'
    }
    const initialState = {
        counter: 0
    }
    const reducer = (state, action) => {
        switch(action.type){
            case ACTION.ADD:
             return {...state, counter: state.counter + 1}
             case ACTION.SUBTRACT:
             return {...state, counter: state.counter - 1}
             default: 
              return state
        }
    }

    
    // const[counter, setCounter] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)

    
 
    return ( 
        <div>
            <h2>Reducer Component</h2>
            <p>{state.counter}</p>
            <button onClick={()=> dispatch({type: ACTION.ADD})}>Add </button>
            <button onClick={()=> dispatch({type: ACTION.SUBTRACT})}>Subtract</button>
        </div>
     );
}
 
