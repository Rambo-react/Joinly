import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.stateProfile.postsData} dispatch={props.dispatch} 
      newPostText={props.stateProfile.newPostText} />
    </div>
  );
}
export default Profile;