import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) { // если профайла нет, т.е. == null или тип Undefuned
        return <Preloader />
    }
   

    return (
        <div>
            <div className={s.descriptionBlock}>

                <img src={props.profile.photos.large} />
                {props.profile.fullName}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>

    )
}

export default ProfileInfo;