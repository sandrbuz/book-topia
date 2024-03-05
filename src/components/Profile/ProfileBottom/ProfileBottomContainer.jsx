import React from 'react';
import { addPost, updateStatus, savePhoto, deletePost} from '../../../redux/profile-reducer';
import ProfileBottom from './ProfileBottom';
import { connect } from 'react-redux';

const ProfileBottomContainer = (props) => {
   return (
         <ProfileBottom userId={props.userId} {...props}/>
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

export default connect(mapStateToProps,{
   addPost,
   deletePost,
   updateStatus,
   savePhoto
})(ProfileBottomContainer)

