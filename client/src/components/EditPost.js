import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom"
import axios from "axios"

const EditPost = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [data, setData] = useState('')
    const history = useHistory()
    const { id } = useParams()
    const url = `http://localhost:5000/blogs/${id}`

    useEffect(()=>{
        axios(url)
        .then((res) =>{
            setData(res.data)
            setTitle(res.data.title)
            setDescription(res.data.description)
            setAuthor(res.data.author)
            
        }).catch(err => console.log(err.message))
    },[url])

    const handleSubmit = (e) => {
        e.preventDefault()
        let updatedPost = {title, description, author}
        axios.post(`http://localhost:5000/edit/${id}`, updatedPost, {headers: {"Content-Type" : "application/json"}})
        .then(res => history.push('/'))
        .catch((err) => {
            console.log(`${err.message}`)
        })
    }

    
    
    return (
    <div>
        {data && (
        <div className="create">
            <h2>Update Post : {data.title} </h2>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>

                <label>Description: </label>
                <textarea required value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>

                <label>Author</label>
                <input type="text" required value={author} onChange={(e)=> setAuthor(e.target.value)}/>

                <button onClick={handleSubmit}>Update Post</button>
            </form>
        </div>
        )}
    </div>
    )
}
 
export default EditPost;