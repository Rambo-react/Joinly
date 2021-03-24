import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

  let postsElements = props.postsData.map((p) => {
    return (<Post message={p.message} key={p.id} likesCount={p.likesCount} />)
  });

 // let newPostElement = React.createRef(); /*создали ссылку на элемент textarea*/

  let buttonAddPost = () => {
     props.addPost();
  }

  let onPostChange = (event) => {
    let text = event.target.value;
    
     props.updateNewPostText(text);
    
  }

  return (

    <div className="postsBlock">
      <h3>MyPosts</h3>
      <div>

        <div>
          
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