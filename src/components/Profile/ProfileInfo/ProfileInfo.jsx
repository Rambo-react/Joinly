import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile ) { // если профайла нет, т.е. == null или тип Undefuned
        return <Preloader />
    }


    return (
        <div>
            <div >
                <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" className={s.profile__img}></img>
            </div>
            <div className={s.descriptionBlock}>
                
                <img src={props.profile.photos.large} />
                ava+description
            </div>
        </div>

    )
}

export default ProfileInfo;