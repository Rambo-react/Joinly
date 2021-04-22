import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from 'redux-form';
import { addPost } from '../../../redux/profile-reducer';
import { Textarea } from '../../common/FormsControls/FormControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import s from './MyPosts.module.css';
import Post from './Post/Post';




let maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"postText"} component={Textarea} placegolder={"Enter your post text"} validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add Post</button>
      </div>

    </Form>
  )
}

const PostReduxForm = reduxForm({ form: "addPost" })(PostForm);

//------------------наследуем класс PureComponent что бы , не писать метод жизненного цикла shouldComponentUpdate
//--------------------------------МОЖНО ТОЖЕ САМОЕ СДЕЛАТЬ И ФУНКЦИОНАЛЬНЫМ КОМПОНЕТННОМ

// class MyPosts extends PureComponent  {

//   //PureComponent заменяет shouldComponentUpdate, автоматически делает shouldComponentUpdate
//   //-------------- shouldComponentUpdate проверяет нужно ли перерисовывать компонент, в пропасах сидит следующие пропсы и стэйт
//   //---------------например по таким условиям которые указаны в функции ниже
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return nextProps != this.props || nextState !=this.state;
//   // }

//   render() {
//     const addNewPost = (formData) => {
//     this.props.addPost(formData.postText);

//   }


//   let postsElements = this.props.postsData.map((p) => {
//     return (<Post message={p.message} key={p.id} likesCount={p.likesCount} />)
//   });

//   return (

//     <div className="postsBlock">

//       <h3>MyPosts</h3>
//       <PostReduxForm onSubmit={addNewPost} />

//       <div className={s.posts}>
//         {postsElements}

//       </div>
//     </div>

//   )
//   }

// }


//-------------------------------ФУНКЦИОНАЛЬНЫЙ КОМПОНЕНТ
//-------------------------- оборачиваем компонент MyPosts, хоком React.memo 
const MyPosts = React.memo( (props) => {

  let postsElements = props.postsData.map((p) => {
    return (<Post message={p.message} key={p.id} likesCount={p.likesCount} />)
  });

  let newPostElement = React.createRef();

  const addNewPost = (formData) => {
    props.addPost(formData.postText);

  }
  return (

    <div className="postsBlock">

      <h3>MyPosts</h3>
      <PostReduxForm onSubmit={addNewPost} />

      <div className={s.posts}>
        {postsElements}

      </div>
    </div>

  )


})


export default MyPosts;