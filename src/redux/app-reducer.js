import { getAuthUserData } from "./auth-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    //dispatch(somethingelse());
    //dispatch(somethingelse());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default: return state;
    }
}
export default appReducer;
