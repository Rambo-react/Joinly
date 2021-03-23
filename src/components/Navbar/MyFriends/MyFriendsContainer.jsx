import React from 'react';
import { connect } from 'react-redux';
import MyFriends from './MyFriends';


let mapStateToProps = (state) => {
    return ({
        stateFriends: state.sitebar.friendsData
    })
}

const MyFriendsContainer = connect(mapStateToProps)(MyFriends);

export default MyFriendsContainer;