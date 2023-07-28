const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first page', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 10 },
        { id: 4, message: 'Blabla', likesCount: 1 },
    ],
    newPostText: ""

}

const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST) {
        //debugger; //в devtools f11 войти в метод
        let newPost = {
            id: state.posts[state.posts.length - 1].id + 1,
            // id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        state.posts.push(newPost);   //add a post
        state.newPostText = '';

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }
    return state;
}
export default profileReducer;