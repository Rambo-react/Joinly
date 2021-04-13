import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { profileAPI } from '../../api/api';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from "./Profile";


class ProfileContainer extends React.Component {

    componentDidMount() {

        //передаём параметры из url 
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 16439;
        }

        profileAPI.getProfile(userId).then(data => { //response - ответ  
            this.props.setUserProfile(data);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} /> // ... разбивает на свойства и компоненты
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

//withRouter - для создания контейнерной компонеты и передаёт в пропсы данные из url
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);

// withRouter(ProfileContainer);
// export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);