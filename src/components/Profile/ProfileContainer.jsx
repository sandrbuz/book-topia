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
import { useEffect } from "react";


let some1 = 111;

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

const ProfileContainer = (props) => {
    const navigate = useNavigate();
    let fetchUserProfileAndStatus = () =>  {
        let userId = props.router.params.userId;
        if (!userId) {
            userId = props.authorizedUserId
            if (!userId) {
                navigate(`/login`);
            }
        }
        props.getUserProfile(userId)
        props.getStatus(userId);
    }

    useEffect(()=>{
        fetchUserProfileAndStatus();
    },[])
    useEffect(()=>{
        fetchUserProfileAndStatus();
    },[props.router.params.userId])




        return (<>
            <Profile userId={props.router.params.userId} savePhoto={props.savePhoto} {...props} />
        </>
        )


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



