import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthUserData } from "../redux/auth-reducer";
import { authAPI } from "../api/api";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {

    class redirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) { return <Navigate to='/login' /> }

            return  <Component {...this.props} />
        }
    }
   let connectedRedirectComponent = connect(mapStateToProps)(redirectComponent);

return connectedRedirectComponent;

// return connect(mapStateToProps,{})(redirectComponent)  //could be so

}






// -----------------------------------------------------------------------
// functional option (69 lesson)

// export const withAuthRedirect = (Component) => {
//     let RedirectComponent = (props) => {

//         if (!props.isAuth) { return <Navigate to='/login' /> }


//         return <Component {...props} />
//     }
//     let connectedRedirectComponent = connect(mapStateToProps, {setAuthUserData})(RedirectComponent);
//     return connectedRedirectComponent;

// }

// functional option (69 lesson)
// ------------------------------------------------------------------------
// here the isAuth check is asynchronous, that is, the check must be performed first, and only then a “redirect” occurs, if necessary.


// export const withAuthRedirect = (Component) => {
//   const RedirectComponent = (props) => {
//     const navigate = useNavigate();

//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
//           withCredentials: true,
//           headers: {
//             "API-KEY": "bfe47a29-eb4d-4ee0-a6e4-d111d63de948"
//           }
//         });

//         if (response.data.resultCode === 0) {
//           let { id, email, login } = response.data.data;
//           props.setAuthUserData(id, email, login);
//         } else {
//           // Redirect to login if not authenticated
//           navigate('/login');
//         }
//       } catch (error) {
//         // Handle error, for example, log it or show a default error message
//         console.error("Error during authentication:", error);
//         // Redirect to login in case of an error
//         navigate('/login');
//       }
//     };

//     useEffect(() => {
//       fetchData();
//     }, []); // Empty dependency array ensures the effect runs only once after initial render

//     // Return the original component
//     return <Component {...props} />;
//   };

//   const ConnectedRedirectComponent = connect(mapStateToProps, { setAuthUserData })(RedirectComponent);
//   return ConnectedRedirectComponent;
// };

