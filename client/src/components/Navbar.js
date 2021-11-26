import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import useFetch from '../utils/useFetch';
import { GlobalContext} from '../utils/GlobalContext'

const Navbar = () => {
    const [postTodo, setPostTodo] = useContext(GlobalContext)
    // console.log(`post from navbar: ${postTodo.post}`)
    return ( 
        <nav className='navbar'>
            <Link to="/">
                <h3>Blog Name</h3>
            </Link>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/create">Create Post</Link>
                <Link to="/reducer">Reducer Page</Link>
                <Link to="/todo">Todo List</Link>
                <span>{postTodo}</span>
            </div>
        </nav>
     );
}
 
export default Navbar;