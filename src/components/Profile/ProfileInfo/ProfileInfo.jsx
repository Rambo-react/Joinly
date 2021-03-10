import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    return (
        <div>
            <div >
                <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" className={s.profile__img}></img>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>

    )
}

export default ProfileInfo;