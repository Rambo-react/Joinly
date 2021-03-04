import s from './Navbar.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
        <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"></img>
        </div>
        <div>
          ava+description
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div class={s.item}>
            post 1
          </div>
          <div class={s.item}>
            post 2
          </div>
        </div>
      </div>
    );
}
export default Profile;