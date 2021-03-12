import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.stateProfile.postsData} addPost={props.addPost} 
      newPostText={props.stateProfile.newPostText} updateNewPostText ={props.updateNewPostText} />
    </div>
  );
}
export default Profile;