import { Form, reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/FormsControls/FormControls";
import s from './ProfileInfo.module.css'


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <Form onSubmit={handleSubmit}>

            <div>
                <button >Save</button>
            </div>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>Full name:</b>
                {createField("fullName", "Full name", Input, [])}
            </div>

            <div>
                <b>Looking for a job:</b>
                {createField("lookingForAJob", "", Input, [], { type: "checkbox" })}
            </div>
            {/* {createField("Full name", placeholder, component, validates, props={}, text="")} */}
            <div>
                <b>My professional skills:</b>
                {createField("lookingForAJobDescription", "My professional skills ...", Textarea, [])}
            </div>

            <div>
                <b>About me:</b>
                {createField("aboutMe", "", Input, [])}
            </div>
            <div>

                <b>Contacts: </b> {
                    Object.keys(profile.contacts).map(key => {
                        return (
                            <div key={key} className={s.contact}>
                               <b>{key}:</b> {createField("contacts." + key, key, Input, [])}  
                            </div>
                        )
                    })
                }

            </div>
            

        </Form>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm)

export default ProfileDataFormReduxForm;