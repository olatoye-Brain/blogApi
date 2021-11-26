import { useEffect, useReducer, useState} from "react";
import axios from "axios";

const useFetch = (url) => {

    const ACTION = {
        GET_START: "getResultStart",
        GET_SUCCESS: "getResultSuccess",
        GET_FAILURE: "getResultFailure"
    }

    const initialState = {
        data: null,
        isLoading: false,
        error: false,
        post: null
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case ACTION.GET_START:
                return {...state, isLoading: true}
            case ACTION.GET_SUCCESS:
                return {...state, isLoading: false, data: action.payload, post: action.length}
            case ACTION.GET_FAILURE:
                return {...state, isLoading: false, error: true}
            default:
                return state

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)



    useEffect(()=>{
        const abortCont = new AbortController()
        // setLoading(true)
        dispatch({type: ACTION.GET_START})
        
        setTimeout(()=>{
            axios.get(url, {signal: abortCont.signal})
            .then(res => {
                console.log('loading state')
                dispatch({type: ACTION.GET_SUCCESS, payload: res.data, length: res.data.length})
            })
            .catch((err)=>{
                console.log(err)
                dispatch({type: ACTION.GET_FAILURE})
                // setError(true)
                // setLoading(false)
            })
        }, 1000)
        return ()=>abortCont.abort()
    }, [url,ACTION.GET_START, ACTION.GET_SUCCESS, ACTION.GET_FAILURE])
    return state 
    // return { data, loading, error}

}
 
export default useFetch;

