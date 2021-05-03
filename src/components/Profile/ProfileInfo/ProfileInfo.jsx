import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/images.png'
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm'


const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);


    if (!profile) { // если профайла нет, т.е. == null или тип Undefuned
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => { setEditMode(false) }
        )
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <div>
                        <img src={profile.photos.large || userPhoto} />
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                    </div>

                </div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            <div>
                {isOwner && <button onClick={goToEditMode}>Edit</button>}
            </div>
            <div>
                <b>{profile.fullName}</b>
            </div>

            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>

                <b>Contacts: </b> {
                    Object.keys(profile.contacts).map(key => {
                        return (
                            <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                        )
                    })
                }

            </div>

        </div>
    )
}



const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    )
}

export default ProfileInfo;