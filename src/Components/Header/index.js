import React from 'react'
import './index.css'

const Header = (props) => {
    return (
        <div className="header--container">
            <div className="header">
                <div className="input--container">
                    <input
                        type="text"
                        name="user-list"
                        onChange={(event) => { props && props.handleSearch(event) }}
                        placeholder='Search By User Id or Title'
                        className='input--field'
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;