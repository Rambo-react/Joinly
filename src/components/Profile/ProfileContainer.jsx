import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { profileAPI } from '../../api/api';
import { setUserProfile , getProfile} from '../../redux/profile-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Profile from "./Profile";


class ProfileContainer extends React.Component {

    componentDidMount() {



        //передаём параметры из url 
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 16439;
        }

        this.props.getProfile(userId);
        // profileAPI.getProfile(userId).then(data => { //response - ответ  
        //     this.props.setUserProfile(data);
        // });
    }

    render() {
        //this.props.isAuth == false
       

        return (
            <Profile {...this.props} profile={this.props.profile} /> // ... разбивает на свойства и компоненты
        )
    }

}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});
    




//withRouter - для создания контейнерной компонеты и передаёт в пропсы данные из url
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { setUserProfile , getProfile})(WithUrlDataContainerComponent);

// withRouter(ProfileContainer);
// export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);