import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import { setAuthUserAvatar } from '../../redux/auth-reducer';
import { toggleIsFetching } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true // отправить ли куки вместе с кроссдоменным запросом ? да
    })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id,email,login} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                    // request for additional data (for user photo)
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
                    .then(response => {
                        return this.props.setAuthUserAvatar(response.data.photos.small)
                    })
                    this.props.toggleIsFetching(false)

 
                }
            })

    }

render() {

return (
    
    <Header {...this.props}  />
    
    )

}

}


const mapStateToProps = (state) => {
   return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    // email: state.auth.email
    avatarSmall: state.auth.avatarSmall,
    isFetching: state.auth.isFetching
}
}

export default connect(mapStateToProps, {
    setAuthUserData,
    setAuthUserAvatar,
    toggleIsFetching
    
})(HeaderContainer);