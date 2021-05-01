import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/images.png'

const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto }) => {
    if (!profile) { // если профайла нет, т.е. == null или тип Undefuned
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large || userPhoto} />
                </div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <div>
                    {profile.fullName}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo;