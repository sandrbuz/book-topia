import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile, getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
// import { withRouter } from 'react-router-dom'; 
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { useHistory } from 'react-router-dom'; //now userNavigate instead
import { profileAPI, usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getAuthUserData } from "../../redux/auth-reducer";
import { compose } from "redux";
import { setStatus } from "../../redux/profile-reducer";
// export function withRouter(Children) {
//     return (props) => {

//         const match = { params: useParams() };
//         return <Children {...props} match={match} />
//     }
// }
export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        // let history = useHistory(); 
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {



    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId//2 (Dymich) //29816 my
            if(!userId) {
                this.props.router.navigate('/login')
            }
        }
        this.props.getUserProfile(userId)
        // usersAPI.getProfile(userId)
        //     .then(data => {
        //         return this.props.setUserProfile(data)
        //     })
        this.props.getStatus(userId);

    }

    componentDidUpdate(prevProps) {
        // this.props.getAuthUserData();

        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            // The code in our componentDidUpdate method is duplicated in componentDidMount, so we can move the repeating logic into a separate function, we can call it fetchUserProfile()
            let userId = this.props.router.params.userId;
            if (!userId) {
                userId = this.props.authorizedUserId //2 (Dymich)
                if(!userId) {
                    this.props.router.navigate('/login')
                }
            }
            this.props.getUserProfile(userId)
            // usersAPI.getProfile(userId)
            //     .then(data => {
            //         return this.props.setUserProfile(data)
            //     })
            this.props.getStatus(userId);
 

        }


    }



    render() {
        return (<>
            {/* {!this.props.profile ? <Preloader /> : <Profile {...this.props} />} */}
            {/* {this.props.isAuth===false?<Navigate to='/login'/>:<Profile {...this.props} />} */}
            <Profile {...this.props} />
        </>
        )
    }

}

// let authRedirectComponent = (props) => {
//     if (!props.isAuth) { return <Navigate to='/login' /> }
//     return <ProfileContainer {...props} />
// }

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth


    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUserProfile: (profile) => {
//             dispatch(setUserProfile(profile))
//         }
//     }
// }

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {
//     setUserProfile,
//     getUserProfile,
//     getAuthUserData
// })(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getUserProfile,
        getAuthUserData,
        setStatus,
        getStatus,
        updateStatus
    }),
    withRouter,
    //withAuthRedirect //it’s not entirely correct if it won’t let you into other profiles if you’re not authorized
)(ProfileContainer)



