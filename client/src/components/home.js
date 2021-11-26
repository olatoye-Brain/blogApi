import BlogData from './BlogData'
import useFetch from '../utils/useFetch'
import { createContext } from 'react'
import Navbar from './Navbar'

const Home = () => {
    const {error, isLoading, data, post} = useFetch('http://localhost:5000/')
    console.log(`Post length is : ${post}`)

    return ( 
        <div>
            { error && <div>...error loading</div>}
            { isLoading && <div>...loading</div> }
            { data && <BlogData blogs={data} post={post}/>}
         
        </div>
     );
}

export default Home


 
