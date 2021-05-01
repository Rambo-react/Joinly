import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import { setUserProfile, getProfile, getStatus, updateStatus, savePhoto } from '../../redux/profile-reducer';

import Profile from "./Profile";


class ProfileContainer extends React.Component {

    refreshProfile() {
        //передаём параметры из url 
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getProfile(userId);
        //this.props.getUserStatus(userId);
        this.props.getStatus(userId);
        // profileAPI.getProfile(userId).then(data => { //response - ответ  
        //     this.props.setUserProfile(data);
        // }); 
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }

    }

    render() {
        //this.props.isAuth == false


        return (
            <Profile {...this.props} 
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus} 
            savePhoto={this.props.savePhoto}
            /> // ... разбивает на свойства и компоненты
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(
    withRouter,
    connect(mapStateToProps, { setUserProfile, getProfile, getStatus, updateStatus, savePhoto })

)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);







//withRouter - для создания контейнерной компонеты и передаёт в пропсы данные из url
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { setUserProfile , getProfile})(WithUrlDataContainerComponent);

// withRouter(ProfileContainer);
// export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);