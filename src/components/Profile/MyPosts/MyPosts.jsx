import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  // let postsData = [
  //   {id: 1, message: "Hello? how are you?", likesCount:0},
  //   {id: 1, message: "It's my first post.", likesCount:25}
  // ]

  let postsElements = props.postsData.map( (p) => {
    return (<Post message={p.message} likesCount={p.likesCount} />)
  } )

  return (

    <div className="postsBlock">
      <h3>MyPosts</h3>
      <div>

        <div>
          <textarea> </textarea>
        </div>
        <div>
          <button>Add </button>
        </div>

      </div>
      <div className={s.posts}>
        {postsElements}

      </div>
    </div>

  );
}
export default MyPosts;