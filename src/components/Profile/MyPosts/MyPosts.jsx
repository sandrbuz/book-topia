import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post.jsx"
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';




const MyPosts = (props) => {

   // let posts = [
   //    {id: 1, message: 'Hi, how are you?', likesCount: 12},
   //    {id: 2, message: 'It\'s my first page', likesCount: 11},
   //    {id: 2, message: 'Blabla', likesCount: 10},
   //    {id: 2, message: 'Blabla', likesCount: 1},
   // ];
  
   let postsElements = props.stateProfilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>) //!
   
   let newPostElement = React.createRef();




   let addPost = () => {
    //  let text = newPostElement.current.value;
     /*props.addPost();*/
      //props.stateProfilePage.newPostText = ''; //did it in state.js
      props.dispatch(addPostActionCreator());
   }



   let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostText(text);
    // let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
    props.dispatch(onPostChangeActionCreator(text));
   }
    return  (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value={props.stateProfilePage.newPostText}  onChange={onPostChange}/>
        </div>
       <div><button  onClick={ addPost }>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElements}
         {/* <Post message={posts[0].message} likesCount={posts[0].likesCount}/>
         <Post message={posts[1].message} likesCount={posts[1].likesCount}/> */}
      </div>
    </div>
 )
}

export default MyPosts;