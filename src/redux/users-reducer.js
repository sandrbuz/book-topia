const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export const followActionCreator = (userId) => {
    return {
        // type: FOLLOW, userId: userId
        type: FOLLOW, userId
    }
}
export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}
export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS, users
    }
}
export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}
export const setCurrentPageAC = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE, pageNumber
    }
}
export const toggleIsFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}

let initialState = {
    users: [
        // { photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/220x330', id: 1, fullname: 'Dmirty', status: "I am a boss", location: { city: 'Minsk', country: 'Belarus' }, followed: false },
        //     { photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/220x330', id: 2, fullname: 'Sasha', status: "I am a boss too", location: { city: 'Moscow', country: 'Russia' }, followed: true },
        //     { photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/220x330', id: 3, fullname: 'Andrew', status: "I am a boss too", location: { city: 'Kiev', country: 'Ukraina' }, followed: false },
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {

    // let stateCopy = { ...state };
    // stateCopy.users = [...state.users];
 
    


    switch (action.type) {
        case FOLLOW:

            // stateCopy.users[action.userId-1].followed = true;

            // return stateCopy
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {
                            ...u,
                            followed: true
                        }
                    } else {
                        return u;
                    }
                })
            }
        case UNFOLLOW:

            // stateCopy.users[action.userId-1].followed = false;

            // return stateCopy
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {
                            ...u,
                            followed: false
                        }
                    } else {
                        return u;
                    }
                })
            }
        case SET_USERS: 
            return {  
                // ...state, 
                // users: [...state.users, ...action.users]  //так сказано написать на уроке, но так пользователи дублируются //в комментах к видео (49 урок) также пишут удалить reactStrictMode, но это делать не нужно, так как в дальнейшем исправится само
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS_COUNT: 
            return {  
                // ...state, 
                // users: [...state.users, ...action.users]  //так сказано написать на уроке, но так пользователи дублируются //в комментах к видео (49 урок) также пишут удалить reactStrictMode, но это делать не нужно, так как в дальнейшем исправится само
                ...state,
                totalUsersCount: action.count
            }
        case SET_CURRENT_PAGE: 
            return {  
                // ...state, 
                // users: [...state.users, ...action.users]  //так сказано написать на уроке, но так пользователи дублируются //в комментах к видео (49 урок) также пишут удалить reactStrictMode, но это делать не нужно, так как в дальнейшем исправится само
                ...state,
                currentPage: action.pageNumber
            }
        case TOGGLE_IS_FETCHING: 
            return {  
                // ...state, 
                // users: [...state.users, ...action.users]  //так сказано написать на уроке, но так пользователи дублируются //в комментах к видео (49 урок) также пишут удалить reactStrictMode, но это делать не нужно, так как в дальнейшем исправится само
                ...state,
                isFetching: action.isFetching
            }
    
        

        default:
            return state
    }

    //     if(action.type === FOLLOW){
    //         console.log('follow')
    //     } else if (action.type === UNFOLLOW) {
    //         console.log('unfollow')
    //     } 
    //  return state;
}
export default usersReducer;