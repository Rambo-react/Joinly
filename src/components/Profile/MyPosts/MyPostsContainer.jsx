import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return({
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    })
}

// let mapDispatchToProps = (dispatch) => {
//     return ({
//         updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text));},
//         addPost: () => {dispatch(addPostActionCreator());}
//     })
// }


//const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
const MyPostsContainer = connect(mapStateToProps, { addPost})(MyPosts);

export default MyPostsContainer;