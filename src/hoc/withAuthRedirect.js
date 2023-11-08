import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthUserData } from "../redux/auth-reducer";

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

//return connect(mapStateToProps,{})(redirectComponent)  //could be so

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


