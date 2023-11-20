// import React from 'react';
//  import './Blog.css'

//  const Blog = (props) =>{
//     const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } =props.blog;
//     const addBookMark = props.addBookMark
        
  
//     return (
//         <div className='blog'>
//             <img src={cover} alt={`Cover picture of the title ${title}`}/>
//             <div className='author-container'>
//             <div className='author-info'>
//                 <img src={author_img} alt="" />
//                 <div>
//                     <p>{author}</p>
//                     <p>{posted_date}</p>
//                 </div>
//              </div>
//              <div className='reading'>
//                    <p>{reading_time} min read</p>
//                   <button onClick={()=>addBookMark(props.blog)}>BookMark</button>
//              </div>
//             </div>
//               <h3>{title}</h3>
//              <div>
//                  <h4>{hashtags}</h4>
//              </div>
            
//        </div>
//     );
// };

// export default Blog;











// =============================new project=======================
// import React from 'react';
//  import './Blog.css'

//  const Blog = (props) =>{
//     const
//          { 
//          id, title, cover, author, author_img,
//          posted_date, reading_time, hashtags 
//         } =props.blog;
   
        
  
//     return (
//         <div className='blog'>
//             <img src={cover} alt={`Cover picture of the title ${title}`}/>
//             <div className='author-container'>
//             <div className='author-info'>
//                 <img src={author_img} alt="" />
//                 <div>
//                     <p>{author}</p>
//                     <p>{posted_date}</p>
//                 </div>
//              </div>
//              <div className='reading'>
//                    <p>{reading_time} min read</p>
//                   <button>BookMark</button>
//              </div>
//             </div>
//               <h3>{title}</h3>
//              <div>
//                  <h4>{hashtags}</h4>
//              </div>
            
//        </div>
//     );
// };

// export default Blog;





// =========================pactice================

import React from 'react';
import './Blog.css'
const Blog = (props) => {
 const { 
         id, title, cover, author, author_img,
         posted_date, reading_time, hashtags 
        } =props.blog;
        
    console.log(props.blog)
    return (
        <div className='blog'>
             <img src={cover} alt="cover picture"/>
              <div className='author-container'>
                        <div className='author-info'>
                            <img src={author_img} alt="" />
                           <div>
                               <p>{author}</p>
                               <p>{posted_date}</p>
                            </div>
                        </div>
                    <div className='reading'>
                        <p>{reading_time} min read</p>
                       <button>BookMark</button>
                   </div>
             </div>
                     <h3>{title}</h3>
             <div>
                     <h4>{hashtags}</h4>
            </div>
                   
     </div>
    );
};

export default Blog;