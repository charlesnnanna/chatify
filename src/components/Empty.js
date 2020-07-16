import React from 'react';
import './Empty.css'

const Empty = ({user}) => {
    const {name, profile_pic, status} = user;
    const first_name = name.split(" ")[0]

    return(
        <div className = 'Empty'>
            <h1 className = "Empty_name">Welcome, {first_name}</h1>
            <img src = {profile_pic} alt = {name} className = "Empty_pic"/>
            <p className = 'Empty_status'>
                <b>Status:</b> {status}
            </p>
            <button className = 'Empty_btn'>Start a conversation</button>
            <p className = 'Empty_info'>
            Search for someone to start chatting with or go to Contacts
            to see who is available
            </p>
        </div>
    )
}

export default Empty;