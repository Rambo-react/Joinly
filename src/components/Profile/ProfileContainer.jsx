import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import { setUserProfile , getProfile, getStatus, updateStatus} from '../../redux/profile-reducer';

import Profile from "./Profile";


class ProfileContainer extends React.Component {

    componentDidMount() {



        //передаём параметры из url 
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.aithorizedUserId;
        }

        this.props.getProfile(userId);
        //this.props.getUserStatus(userId);
        this.props.getStatus(userId);
        // profileAPI.getProfile(userId).then(data => { //response - ответ  
        //     this.props.setUserProfile(data);
        // });
    }

    render() {
        //this.props.isAuth == false
       

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} /> // ... разбивает на свойства и компоненты
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    aithorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});
    

export default compose (
    connect(mapStateToProps, { setUserProfile , getProfile, getStatus, updateStatus }),
    withRouter
   )(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);







//withRouter - для создания контейнерной компонеты и передаёт в пропсы данные из url
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { setUserProfile , getProfile})(WithUrlDataContainerComponent);

// withRouter(ProfileContainer);
// export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);