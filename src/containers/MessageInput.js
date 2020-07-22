import React from 'react'
import './MessageInput.css'
import {setTypedValue, sendMessage} from '../actions/index'
import store from '../store'

const MessageInput = ({value}) => {
    const state = store.getState();
    const{ typed, activeUserId} = state;

    const dispatchTypedValue = (e) => {
        store.dispatch(setTypedValue(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch(sendMessage(typed, activeUserId));
    }

    return(
        <form className = "Message" onSubmit = {handleSubmit}>
            <input
             
             className = 'Message_input'
             value = {typed}
             onChange = {dispatchTypedValue}
             placeholder = 'write a message'
            />
        </form>
    )
}


export default MessageInput;