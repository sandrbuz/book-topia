import React from 'react';
// import s from "./MyPosts.module.css"
// import Post from "./Post/Post.jsx"
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';





// const MyPostsContainer = () => {





   
//    return (
//       <StoreContext.Consumer>
//          {(store) => {

//             let state = store.getState();

//             let addPost = () => {
//                //  let text = newPostElement.current.value;
//                /*props.addPost();*/
//                //props.stateProfilePage.newPostText = ''; //did it in state.js
//                store.dispatch(addPostActionCreator());
//             }
         
         
         
//             let updateNewPostText = (text) => {
//                store.dispatch(onPostChangeActionCreator(text));
//             }
         


//             return <MyPosts addPost={addPost}
//                updateNewPostText={updateNewPostText}
//                posts={state.profilePage.posts}
//                newPostText={state.profilePage.newPostText}
//             // stateProfilePage={props.stateProfilePage}
//             />
//          }
//          }

//       </StoreContext.Consumer>
//    )
// }

let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
     addPost: ()=> {
      dispatch(addPostActionCreator());
     },
     updateNewPostText: (text) => {
       dispatch(onPostChangeActionCreator(text));
     }
   }
}

 let SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default SuperMyPostsContainer;