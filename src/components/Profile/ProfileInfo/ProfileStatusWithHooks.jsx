import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks =(props) => {

    // Хуки начинаются на use
        //useState возвращает массив, первый элемент - это значение, второй функция которая будет изменять это значение
     //   let stateWithSetState = useState(false);
        //элемент со значением
     //   let editMode = stateWithSetState[0];
        //фыункция которая будет устанавливать значение
      //  let setEditMode = stateWithSetState[1];

        let [editMode, setEditMode] = useState(false);
        let [status, setStatus] = useState(props.status);

    // useEffect выполняется после полной отрисовки, и потом если изменился статус в пропсах, то опять выполняется useEffect
        useEffect( () => {
            setStatus(props.status);
        }, [props.status])

        const activateEditMode = () => {
            setEditMode(true);
        }

        const  deactivateEditMode = () => {
            setEditMode(false);
            props.updateStatus(status);
        }

        const onStatusChange = (e) => {
                setStatus(e.currentTarget.value);
        }

        return (
            < div >
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}  >{props.status || "---THIS---USER---HAVEN'T---STATUS-------"}</span>
                    </div>
                }

                {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                    </div>
                }

            </div >
        )
}

export default ProfileStatusWithHooks;