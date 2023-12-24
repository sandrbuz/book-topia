import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators.js';
import { Textarea } from '../../common/FormsControls/FormsControls.js';

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

const MyPosts = (props) => {

  // let posts = [
  //    {id: 1, message: 'Hi, how are you?', likesCount: 12},
  //    {id: 2, message: 'It\'s my first page', likesCount: 11},
  //    {id: 2, message: 'Blabla', likesCount: 10},
  //    {id: 2, message: 'Blabla', likesCount: 1},
  // ];

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} key={p.id} />) //!

  // let newPostElement = React.createRef();




  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }



  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
        {/* <Post message={posts[0].message} likesCount={posts[0].likesCount}/>
         <Post message={posts[1].message} likesCount={posts[1].likesCount}/> */}
      </div>
    </div>
  )
}








export default MyPosts;



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