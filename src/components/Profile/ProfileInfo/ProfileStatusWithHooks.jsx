import React, { useState } from 'react';

const ProfileStatusWithHooks =(props) => {


        //useState возвращает массив, первый элемент - это значение, второй функция которая будет изменять это значение
        let stateWithSetState = useState(false);
        //элемент со значением
        let editMode = stateWithSetState[0];
        //фыункция которая будет устанавливать значение
        let setEditMode = stateWithSetState[1];


        return (
            < div >
                {!editMode &&
                    <div>
                        <span >{props.status || "------HAVEN'T---STATUS-------"}</span>
                    </div>
                }

                {editMode &&
                    <div>
                        <input />
                    </div>
                }

            </div >
        )
}

export default ProfileStatusWithHooks;