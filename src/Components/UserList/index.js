import React, { useEffect, useState } from 'react'
import './index.css'
import Axios from 'axios'
import Header from '../Header'
import UserProfile from '../UserProfile'

const UserList = () => {
    const [usersListPersist, setusersListPersist] = useState([]);
    const [userList, setuserList] = useState([]);

    useEffect(() => {
        const api_url = `https://jsonplaceholder.typicode.com/users`;
        Axios.get(api_url)
            .then(resp => {
                setuserList([...resp.data]);
                setusersListPersist([...resp.data]);
            })
    }, [])
    const handleSearch = searchString => {
        let newUserList = userList.filter(x => Number(x.id) === Number(searchString.target.value) ||
            x.name.toLowerCase().match(searchString.target.value.toLowerCase()))
        if (searchString.target.value.length > 0) {
            setuserList([...newUserList]);
        }
        else {
            setuserList([...usersListPersist])
        }
    }
    return (
        <div className='user--list--container'>
            <Header handleSearch={handleSearch} />
            <UserProfile userData={userList} />
        </div>
    )
}


export default UserList;