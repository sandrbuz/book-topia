// here the input is not overwritten




// import React from 'react';
// import styles from './Users.module.css';
// import Preloader from '../common/Preloader/Preloader';
// import Paginator from '../common/Paginator/Paginator';
// import User from './User';
// import { debounce } from 'lodash';
// import { useState } from 'react';
// import { useEffect } from 'react';


// const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) => {

    //-------------------------------------------------------------------- simple submitting woth debounce
    // const debouncedSearch = useCallback(
    //     debounce((values) => {
    //       props.onSearchUser(values);
    //     }, 350),
    //     [props.onSearchUser]
    //   );                                          for redux-form

    //   const onSearchUser = (values) => {
    //     debouncedSearch(values);
    //   };
    // ------------------------------------------------------------------- simple submitting
    //   let onSearchUser = (values) => { 
    //     props.onSearchUser(values)                for redux-form
    //  }
    // -------------------------------------------------------------------for search (during transitions the text in the input will be lost)
    // const [typingTimer, setTypingTimer] = useState(null);
    // const doneTypingInterval = 500; //Adjust as needed
    // const [inputValue, setInputValue] = useState('');

    // // Event handler for input change
    // const handleInputChange = (event) => {
    //     clearTimeout(typingTimer);
    //     const timer = setTimeout(() => doneTyping(event.target.value), doneTypingInterval);
    //     setTypingTimer(timer);
    //     setInputValue(event.target.value);
    // };

    // // Function to be executed after user stops typing
    // const doneTyping = (value) => {
    //     //   console.log("User has finished typing. Input value:", value);
    //     props.onSearchUser(value)

    // };
    // ---------------------------------------------------------------------for search users input (chat gpt)

//     const [typingTimer, setTypingTimer] = useState(null);
//     const doneTypingInterval = 500; //Adjust as needed
//     const [inputValue, setInputValue] = useState(() => {
//         // Retrieve input value from local storage
//         return localStorage.getItem('searchInputValue') || '';
//     });

//     useEffect(() => {
//         return () => {
//             // Cleanup function to clear typing timer
//             clearTimeout(typingTimer);
//         };
//     }, [typingTimer]);

//     const handleInputChange = (event) => {
//         clearTimeout(typingTimer);
//         const timer = setTimeout(() => doneTyping(event.target.value), doneTypingInterval);
//         setTypingTimer(timer);
//         setInputValue(event.target.value);
//     };
   
//     const doneTyping = (value) => {
//         localStorage.setItem('searchInputValue', value); // Store input value in local storage
//         console.log(value)
//         props.onSearchUser(value);
//     };

//     return (
//         <div className={styles.wrapper}>
//             <input type="text" value={inputValue} onChange={handleInputChange} placeholder="search user"/>
//             {/* <SearchUsersFormReduxForm onSubmit={onSearchUser}/> */}
//             {!props.users.length && <div>no such user</div>}
//             {props.isFetching && <Preloader />}
//             <div className={styles.usersItems}>
//                 {props.users.map(u => <User user={u}
//                     followingInProgress={props.followingInProgress}
//                     key={u.id}
//                     unfollow={props.unfollow}
//                     follow={props.follow}
//                     isAuth={props.isAuth}
//                 />)}
//             </div>
//             <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
//         </div>
//     )

// }

// const SearchUsersForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit} className={styles.addNewMessage}>
//             <Field name="searchedUserName" component={"textarea"} placeholder='Enter user name' />
//             <button type="submit">search</button>
//         </form>
//     )
// }
// const SearchUsersFormReduxForm = reduxForm({ form: "searchUser", destroyOnUnmount: false })(SearchUsersForm)


// export default Users;


//here the input is overwritten during transitions


// import React from 'react';
// import styles from './Users.module.css';
// import Preloader from '../common/Preloader/Preloader';
// import Paginator from '../common/Paginator/Paginator';
// import User from './User';
// import { useState } from 'react';

// const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) => {
//      // ------------------------------------------------ -------------------for search users input
//      const [typingTimer, setTypingTimer] = useState(null);
//      const doneTypingInterval = 500; //Adjust as needed
//      const [inputValue, setInputValue] = useState('');

//      // Event handler for input change
//      const handleInputChange = (event) => {
//          clearTimeout(typingTimer);
//          const timer = setTimeout(() => doneTyping(event.target.value), doneTypingInterval);
//          setTypingTimer(timer);
//          setInputValue(event.target.value);
//      };

//      // Function to be executed after user stops typing
//      const doneTyping = (value) => {
//          // console.log("User has finished typing. Input value:", value);
//          props.onSearchUser(value)

//      };

//      return (
//          <div className={styles.wrapper}>
//              <input
//                  type="text"
//                  value={inputValue}
//                  onChange={handleInputChange}
//                  placeholder="search user"
//              />
//              {!props.users.length && <div>no such user</div>}
//              {props.isFetching && <Preloader />}
//              <div>
//                  {props.users.map(u => <User user={u}
//                      followingInProgress={props.followingInProgress}
//                      key={u.id}
//                      unfollow={props.unfollow}
//                      follow={props.follow}
//                      isAuth={props.isAuth}
//                  />)}
//              </div>
//              <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
//          </div>
//      )

// }
// export default Users;