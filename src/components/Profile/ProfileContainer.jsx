import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
// import { withRouter } from 'react-router-dom'; 
// import { useParams } from 'react-router-dom';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { useHistory } from 'react-router-dom';
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
            userId = 2
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                return this.props.setUserProfile(response.data)
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            // The code in our componentDidUpdate method is duplicated in componentDidMount, so we can move the repeating logic into a separate function, we can call it fetchUserProfile()
            let userId = this.props.router.params.userId;
            if (!userId) {
                userId = 2
            }
    
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
                .then(response => {
                    return this.props.setUserProfile(response.data)
                })
        }

    }



    render() {
        return (<>
            {/* {!this.props.profile ? <Preloader /> : <Profile {...this.props} />} */}
            <Profile {...this.props} />
        </>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUserProfile: (profile) => {
//             dispatch(setUserProfile(profile))
//         }
//     }
// }

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent);

