import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {

    

    return (
        <StoreContext.Consumer> 
            {
                (store) => {
                    let state = store.getState();

                    let onAddPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                
                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }   

                    return (
                        <MyPosts updateNewPostText={onPostChange} addPost={onAddPost} postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText} />    

                     )
                }
            }
            
        </StoreContext.Consumer>
    );
}
export default MyPostsContainer;