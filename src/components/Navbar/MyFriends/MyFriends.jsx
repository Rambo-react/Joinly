import Friend from './Friend/Friend';
import s from './MyFriends.module.css';


const MyFriends = (props) => {

    let arrayFriends = props.stateFriends.map( (f) => {
      return(<Friend name={f.name} urlImg={f.urlImg} />)  
    } )

    return (
        <div className={s.friendsBlock}>
            <h2>Friends</h2>
            <div className={s.friendsFlex}>
                {arrayFriends}
                
            </div>
           

        </div>
    )
}

export default MyFriends;