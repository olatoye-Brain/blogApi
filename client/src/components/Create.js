import { useState, useContext } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios"
import { GlobalContext } from "../utils/GlobalContext";

const Create = () => {
    const [formData, setFormData] = useState({})
    const [postTodo, setPostTodo] = useContext(GlobalContext)

    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/posts', formData, {
            headers: {"Content-Type" : "application/json"},
        }).then(res => {
            if(res) console.log('post Created')
            history.push("/")
            setPostTodo(previousTodo => previousTodo + 1)
        }).catch((err)=> {
            console.log(`${err.message}`)
        })
    }

    return ( 
        <div className="create">
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" required onChange={(e)=> setFormData({...formData, title: e.target.value})}/>

                <label>Description: </label>
                <textarea required  onChange={(e)=> setFormData({...formData, description: e.target.value})}></textarea>

                <label>Author</label>
                <input type="text" required onChange={(e)=> setFormData({...formData, author: e.target.value})}/>

                <button>Submit Post</button>
            </form>
           
        </div>
     );
}
 
export default Create;