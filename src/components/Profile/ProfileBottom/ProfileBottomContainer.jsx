import React from 'react';
// import s from './MyPosts.module.css'
// import Post from './Post/Post.jsx'
import { addPost, updateStatus, savePhoto} from '../../../redux/profile-reducer';
import ProfileBottom from './ProfileBottom';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';



const ProfileBottomContainer = (props) => {
   return (
      <div>
         <ProfileBottom {...props}/>
      </div>
   )
}



let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      isAuth: state.auth.isAuth,
      authorizedUserId: state.auth.id,


   }
}
// let mapDispatchToProps = (dispatch) => {
//    return {
//      addPost: ()=> {
//       dispatch(addPost());
//      },
//      onPostChange: (text) => {
//        dispatch(onPostChange(text));
//      }
//    }
// }



export default connect(mapStateToProps,{
   addPost,
   updateStatus,
   savePhoto
})(ProfileBottomContainer)

