import React from 'react';
import s from './ProfileBottom.module.css'
import Post from './Post/Post.jsx'
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators.js';
import { Textarea } from '../../common/FormsControls/FormsControls.js';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx'

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} placeholder='Post message'
        validate={[required, maxLength10]} />
      </div>
      <div>
        <button type="submit">Add post</button>
      </div>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm({ form: "profile" })(AddNewPostForm)


const ProfileBottom = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message}  id={p.id} key={p.id} />) //!

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <>
      <div className={s.userName}>{props.profile?.fullName}</div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} isAuth={props.isAuth} authorizedUserId={props.authorizedUserId} userId={props.userId} />
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </>
  )
}








export default ProfileBottom;



