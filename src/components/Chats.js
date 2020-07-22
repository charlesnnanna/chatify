import React from 'react'
import './Chats.css'

const Chat = ({message}) => {
    const {text, is_user_msg} = message;

    
        
            return  <span className = {`${is_user_msg ? "is_user_msg" : "Chat"}`}>{text}</span>
        
    }


const Chats = ({messages}) => {
    return(
        <div className = 'Chats'>
            {
                messages.map(message => (
                    <Chat message = {message} key ={message.number}/>
                ))
            }
        </div>
    )
}



export default Chats;