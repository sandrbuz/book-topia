import profileReducer, { addPost } from "./profile-reducer";
import { ReactDOM } from "react";
import React from "react";

it("length of posts should ve incremented", () => {
    // 1. test data
    let action = addPost('it-kamsutra');

    let state = {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my first page', likesCount: 11 },
            { id: 3, message: 'Blabla', likesCount: 10 },
            { id: 4, message: 'Blabla', likesCount: 1 },
        ],
        profile: null,
        status: ''

    }
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect (newState.posts.length).toBe(5);

});