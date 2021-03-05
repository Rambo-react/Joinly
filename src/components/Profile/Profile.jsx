import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
        <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"></img>
        </div>
        <div>
          ava+description
        </div>
        <MyPosts />
      </div>
    );
}
export default Profile;