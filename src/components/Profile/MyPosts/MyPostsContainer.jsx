import React from 'react';
// import s from "./MyPosts.module.css"
// import Post from "./Post/Post.jsx"
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';





const MyPostsContainer = (props) => {


   let state = props.store.getState();



   let addPost = () => {
    //  let text = newPostElement.current.value;
     /*props.addPost();*/
      //props.stateProfilePage.newPostText = ''; //did it in state.js
      props.store.dispatch(addPostActionCreator());
   }



   let updateNewPostText = (text) => {
    props.store.dispatch(onPostChangeActionCreator(text));
   }

    return  (
    <MyPosts addPost={addPost}
            updateNewPostText={updateNewPostText}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            // stateProfilePage={props.stateProfilePage}
            />
 )
}

export default MyPostsContainer;