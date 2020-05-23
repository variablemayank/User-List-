import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './index.css'

const UserInfoById = (props) => {
    const [userPost, setuserPost] = useState([])
    const userId = props.match.params.id;
    useEffect(() => {
        const api_url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        Axios.get(api_url)
            .then(res => { setuserPost([...res.data]) })
            .catch(err => console.log("User Posts Not found"))
    }, [])

    return (
        <div className='user--info--container'>
            <div className="details--user--id">Details of the User-ID {userId}</div>
            <div className="user--post">
                {
                    userPost.map((element, index) => {
                        return (
                            <div key={index} className="user--post--card">
                                <div className="user--post--card--title">Title :- <span className='title--color'>{element.title}</span></div>
                                <div className="user--post--card--body">Body :- <span className='title--color'>{element.body}</span></div>
                            </div>
                        )
                    })
                }
                {
                    userPost.length === 0 &&
                    <div className="loader"></div>
                }

            </div>
        </div>
    )
}
export default UserInfoById;