import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

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


// export const withAuthRedirect = (Component) => {
//     let redirectComponent = (props) => {
//         if (!props.isAuth) { return <Navigate to='/login' /> }
//         return <Component {...props} />
//     }
//     let connectedRedirectComponent = connect(mapStateToProps, {})(redirectComponent);
//     return connectedRedirectComponent;

// }