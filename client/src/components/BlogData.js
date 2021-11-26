import { Link } from 'react-router-dom'
const BlogData = ({blogs, post}) => {
    return ( 
        <div className="blog-list">
            Post: {post}
            {blogs.map(blog => (
                <div className="blog-preview" key={blog._id}>
                    <Link to={`/blogs/${blog._id}`}>
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        {blog.author}
                    </Link>
                </div>
            ))};
        </div>
    )
}
 
export default BlogData;