import React from 'react'
import { Link } from "react-router-dom";
import './index.css';

const UserProfile = (props) => {
    const { userData } = props || {};
    return (
        <div className='user--profile'>
            <div className='result--found--count'>{userData && userData.length} Results Found</div>
            {
                userData && userData.length > 0 && userData.map((element, index) => {
                    return (
                        <Link target="_blank" to={`/user/${element.id}`} key={index} className="user--profile--container">
                            <div className="user--profile--id">User :- <span className='user--profile--color'>{element.id}</span></div>
                            <div className="user--profile--title">Name :- <span className='user--profile--color'>{element.name}</span></div>
                        </Link>

                    )
                })
            }
        </div>
    )
}

export default UserProfile;