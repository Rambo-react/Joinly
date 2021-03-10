import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


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