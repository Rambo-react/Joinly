import React, { FC } from 'react';
import { UsersType } from '../../types/types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

type PropsType = {
    currentPage:number
     pageSize:number
     onPageChanged: (pageNumber: number) => void
     totalUsersCount:number
      users: Array<UsersType>
      followingInProgress: Array<number>
      unfollow: (userId:number) => void
      follow: (userId:number) => void
}

let Users: FC<PropsType> = ({ currentPage, pageSize, onPageChanged, totalUsersCount,  users, ...props }) => {


    return (
        <div>
            <Paginator currentPage={currentPage} pageSize={pageSize} onPageChanged={onPageChanged} totaltemsCount={totalUsersCount}  />
            <div>
                {
                    users.map(u => <User user={u}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                        key={u.id} />)

                }
            </div>
        </div>
    )
}

export default Users;