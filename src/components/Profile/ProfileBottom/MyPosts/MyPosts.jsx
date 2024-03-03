import React from "react";
import s from "./MyPosts.module.css"
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import Post from "./Post/Post";

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
    let postsElements = props.posts.map(p => <Post thumbnail={p.thumbnail} message={p.message}  id={p.id} key={p.id} />) 
    return (
        <>
            <AddNewPostReduxForm onSubmit={props.onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </>
    )
}

export default MyPosts;