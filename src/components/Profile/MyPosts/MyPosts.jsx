import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        
        <div>
          my MyPosts
          <div>
            <textarea ></textarea>
            <button>Add </button>
          </div>
          <div>
            <Post message='Hello? how are you?'LikesCount='0' />
            <Post message="It's my first post." LikesCount='25' />

          </div>
          
        </div>
     
    );
}
export default MyPosts;