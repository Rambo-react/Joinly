import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {


  let postsElements = props.postsData.map( (p) => {
    return (<Post message={p.message} likesCount={p.likesCount} />)
  } );

  let newPostElement = React.createRef(); /*создали ссылку на элемент textarea*/

  let buttonAddPost = () => {  
   // props.addPost();
   props.dispatch({type:'ADD-POST'});
  }

  let onPostChange = () => {
  
    let text = newPostElement.current.value; /*current свойство, ссылается на нативный html элемент */
   // props.updateNewPostText(text);
   let action = {type:'UPDATE-NEW-POST-TEXT', newText:text};
   props.dispatch(action);
  }

  return (

    <div className="postsBlock">
      <h3>MyPosts</h3>
      <div>

        <div>
          <textarea onChange={onPostChange}  ref={newPostElement} value={props.newPostText} />
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