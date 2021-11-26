import { useParams, useHistory, Link } from 'react-router-dom' 
import useFetch from '../utils/useFetch'
import axios from 'axios'
import { useContext } from 'react'
import { GlobalContext } from '../utils/GlobalContext'

const BlogDetails = () => {
    const { id } = useParams()
    console.log(`ID: ${id}`)
    const {data, error, isLoading } = useFetch(`http://localhost:5000/blogs/${id}`)
    const [postTodo, setPostTodo] = useContext(GlobalContext)
    const history = useHistory()

    const handleClick = (e) =>{
        e.preventDefault()
        console.log('button clicked')
        axios.get(`http://localhost:5000/delete/${id}`)
        .then(res =>{ 
            history.push('/')
            setPostTodo(previousTodo => previousTodo - 1)
        })
    
        .catch(err=> console.log(err.message))
    }

    const updatePost = () =>{
        history.push(`/edit/${id}`)
    }

    return ( 
        <div className="blog-details">
            { isLoading && <div>...loading</div> }
            { error && <div>...error loading</div>}
            { data && (
                <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <p>{data.autho}</p>
                <button onClick={handleClick}>Delete</button>&nbsp;
                <button onClick={updatePost}>Update</button>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetails;