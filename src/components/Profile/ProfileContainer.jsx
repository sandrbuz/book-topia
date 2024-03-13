import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile, getUserProfile, getStatus, updateStatus, savePhoto } from "../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { getAuthUserData } from "../../redux/auth-reducer";
import { compose } from "redux";
import { setStatus } from "../../redux/profile-reducer";

export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
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
    fetchUserProfileAndStatus () {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.router.navigate('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.fetchUserProfileAndStatus()
    }

    componentDidUpdate(prevProps) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.fetchUserProfileAndStatus()
        }
    }



    render() {
        return (<>
            <Profile userId={this.props.router.params.userId} savePhoto={this.props.savePhoto} {...this.props} />
        </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getUserProfile,
        getAuthUserData,
        setStatus,
        getStatus,
        updateStatus,
        savePhoto
    }),
    withRouter
)(ProfileContainer)



