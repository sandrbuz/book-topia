import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {

  

    // componentDidMount() {
    //     this.props.getAuthUserData();
    // this.props.toggleIsFetching(true);
    // authAPI.me()
    //     .then(data => {
    //         if (data.resultCode === 0) {
    //             let { id, email, login } = data.data;
    //             this.props.setAuthUserData(id, email, login)
    //             // request for additional data (for user photo)
    //             usersAPI.getProfile(id)
    //                 .then(data => {
    //                     return this.props.setAuthUserAvatar(data.photos.small)
    //                 })
    //             this.props.toggleIsFetching(false)


    //         }
    //     })

    // }


    render() {
        return (
            <>
                <Header  {...this.props} />
            </>
        )

    }

}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        // email: state.auth.email
        avatarSmall: state.auth.avatarSmall,
        isFetchingHeader: state.auth.isFetchingHeader
    }
}

export default connect(mapStateToProps, {
    logout
})(HeaderContainer);