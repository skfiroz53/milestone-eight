import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';

const Blogs = () => {
        const [blogs,setBlogs] = useState([])
        const [bookmark,setBookMark] = useState([])
        console.log(bookmark[0].title)
        useEffect (() => {
            fetch('products.json')
            .then(res => res.json())
            .then(data =>setBlogs(data))
        },[])

         const addBookMark =(blog) =>{
            const newBookMark = [...bookmark,blog]
            setBookMark(newBookMark)
         }


    return (
        <div className='blogs-container'>
            <div className='blogs'>
            {
               blogs.map(blog =><Blog
                key={blog.id}
                blog = {blog}
                addBookMark ={addBookMark}
               ></Blog>) 
            }
         </div>


             <div className='bookmarks-container'>
                <h3>Spent  time on read :{bookmark.length}</h3>
                <p>Bookmarked Blogs : 8</p>
             </div>
        </div>
    );
};

export default Blogs;