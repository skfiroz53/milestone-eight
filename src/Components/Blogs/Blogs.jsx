import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    const [bookMarks, setBookMarks] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    },[])

    const addBookMark = (blog)=>{
        const newBookMark = [...bookMarks,blog.title]
        setBookMarks(newBookMark)
      } 

    return (
    <div className='blogs-container'>
        <div className='blogs'>
            {
                blogs.map(blog =><Blog
                key = {blog.id}
                blog = {blog}
                addBookMark ={addBookMark}
                ></Blog>)
            }
       </div>

         <div className='bookmarks-container'>
           <div className='books-marks'>
                <h3>Spent  time on read :</h3>
               <p>Bookmarked Blogs :{bookMarks}</p>
           </div>
         </div>
   </div>
);
};

export default Blogs;