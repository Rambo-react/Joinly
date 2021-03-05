import s from './Post.module.css';

const Post = (props) => {
    return (

          <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEJw-X9coO-yHSeStxdfIkEas1ProvBEoxA&usqp=CAU'></img>
            {props.message}
            <div>
              <span>Like</span> {props.LikesCount}
            </div>
          </div>

    );
}
export default Post;