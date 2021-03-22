import React from 'react';
import StoreContext from '../../../StoreContext';
import MyFriends from './MyFriends';



const MyFriendsContainer = (props) => {

    return (
        <StoreContext.Consumer>

            { (store) => {

            let state = store.getState().sitebar.friendsData;

                return (<MyFriends stateFriends={state} />)
            }
            }

        </StoreContext.Consumer>

    )
}

export default MyFriendsContainer;