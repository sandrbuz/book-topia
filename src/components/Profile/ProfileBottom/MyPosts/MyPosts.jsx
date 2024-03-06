import React from "react";
import s from "./MyPosts.module.css"
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import Post from "./Post/Post";
import Preloader from "../../../common/Preloader/Preloader";
import { useRef, useEffect } from "react";
import { reset } from 'redux-form';
import { connect } from "react-redux";



const maxLength15 = maxLengthCreator(15);

const AddNewPostForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field className={s.field} name="newPostText" component={Textarea} placeholder='Post message'
                validate={[required, maxLength15]} />
            <button className={s.btn} type="submit">Add</button>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({ form: "profile" })(AddNewPostForm)



const MyPosts = (props) => {
    const postsRef = useRef(null);

    let onDeletePost = async (postId) => {
        await props.deletePost(postId)
        if (postsRef.current) {
            postsRef.current.scrollTop = -postsRef.current.scrollHeight;
        }
    }
    let onAddPost = async (values) => {
        await props.onAddPost(values.newPostText);
        if (postsRef.current) {
            postsRef.current.scrollTop = -postsRef.current.scrollHeight;
        }

    }

    useEffect(() => {
        if (postsRef.current) {
            postsRef.current.scrollTop = -postsRef.current.scrollHeight;
        }
    }, []);

    let postsElements = props.posts.map(p => <Post onDeletePost={() => onDeletePost(p.id)} thumbnail={p.thumbnail} message={p.message} id={p.id} key={p.id} />)
    return (
        <div className={s.myPosts}>
            <AddNewPostReduxForm onSubmit={onAddPost} />
            <ul className={s.posts} ref={postsRef}>
                {postsElements}
            </ul>
        </div>
    )
}

export default MyPosts;