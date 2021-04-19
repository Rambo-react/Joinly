import React from 'react';
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from 'redux-form';
import { addPost } from '../../../redux/profile-reducer';
import { Textarea } from '../../common/Preloader/FormsControls/FormControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import s from './MyPosts.module.css';
import Post from './Post/Post';




let maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"postText"} component={Textarea} placegolder={"Enter your post text"} validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add Post</button>
      </div>

    </Form>
  )
}

const PostReduxForm = reduxForm({ form: "addPost" })(PostForm);


const MyPosts = (props) => {

  const addNewPost = (formData) => {
    props.addPost(formData.postText);

  }


  let postsElements = props.postsData.map((p) => {
    return (<Post message={p.message} key={p.id} likesCount={p.likesCount} />)
  });

  return (

    <div className="postsBlock">

      <h3>MyPosts</h3>
      <PostReduxForm onSubmit={addNewPost} />

      <div className={s.posts}>
        {postsElements}

      </div>
    </div>

  );
}



export default MyPosts;