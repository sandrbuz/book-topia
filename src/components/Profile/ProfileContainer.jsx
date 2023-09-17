import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                return this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (<>
            {!this.props.profile ? <Preloader /> : <Profile {...this.props} />}
            {/*  <Profile {...this.props}  /> */}
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

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);

