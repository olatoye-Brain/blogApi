import { createContext, useEffect, useReducer, useState }from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../components/Navbar'
import useFetch from './useFetch'

export const GlobalContext = createContext()
export const GlobalProvider = (props) => {  
    const { error, isLoading, data, post } = useFetch('http://localhost:5000/')
    const [postTodo, statePostTodo] = useState(null)
    const initial = { 
        datas: null
    }
    const ACTION = { 
        LOAD: "load post"
    }

    const reducer = (state, action) => {
        switch(action.type){
            case ACTION.LOAD:
                return{
                    ...state, datas: action.payload, 
                }
            default:
                return state
        }
    }
    const [todoList, dispatch] = useReducer(reducer, initial)
    // const [postLength, setPostLength] = useState(null)                                                    

    useEffect(()=> { 
        dispatch({type: ACTION.LOAD, payload: { error, isLoading, data, post }})
        statePostTodo(post)
    },[error, isLoading, data, post, ACTION.LOAD ])

  
    console.log(todoList)
    console.log(`Console logging ${postTodo}`)
    return(
     
        <GlobalContext.Provider value={[postTodo, statePostTodo]}>
            {props.children}
        </GlobalContext.Provider>
    )
}

