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
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} key={p.id} />) //!

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <>
      <div>{props.profile?.fullName}</div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} isAuth={props.isAuth} authorizedUserId={props.authorizedUserId} userId={props.userId} />
      <h3>My posts</h3>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </>
  )
}








export default ProfileBottom;



let a = {
  name: 'Sasha',
  age: 25,
  skills: {
    js: 5,
    ts: 4
  }
}

let b = a;

console.log(b === a, "тренеровка в файле MyPosts 46 урок")

console.log(b.skills === a.skills)

let c = { ...a };

console.log(c === a)