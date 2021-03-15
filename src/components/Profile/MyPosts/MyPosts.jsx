import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {


  let postsElements = props.postsData.map((p) => {
    return (<Post message={p.message} likesCount={p.likesCount} />)
  });

  let newPostElement = React.createRef(); /*создали ссылку на элемент textarea*/

  let buttonAddPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (event) => {

    //let text = newPostElement.current.value; /*current свойство, ссылается на нативный html элемент */
    // props.updateNewPostText(text);
    // let action = {type:'UPDATE-NEW-POST-TEXT', newText:text};
    let text = event.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (

    <div className="postsBlock">
      <h3>MyPosts</h3>
      <div>

        <div>
          {/* <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /> */}
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={buttonAddPost} >Add </button>
        </div>

      </div>
      <div className={s.posts}>
        {postsElements}

      </div>
    </div>

  );
}
export default MyPosts;