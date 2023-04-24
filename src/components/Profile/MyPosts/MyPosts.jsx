import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post.jsx"



const MyPosts = (props) => {

 

   // let posts = [
   //    {id: 1, message: 'Hi, how are you?', likesCount: 12},
   //    {id: 2, message: 'It\'s my first page', likesCount: 11},
   //    {id: 2, message: 'Blabla', likesCount: 10},
   //    {id: 2, message: 'Blabla', likesCount: 1},
   // ];
  
   // let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    return  (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
       <textarea></textarea>
       <div><button>Add post</button></div>
      </div>
      <div className={s.posts}>
         { props.arrPosts}
         {/* <Post message={posts[0].message} likesCount={posts[0].likesCount}/>
         <Post message={posts[1].message} likesCount={posts[1].likesCount}/> */}
      </div>
    </div>
 )
}

export default MyPosts;