import React from 'react'
import store from '../store'
import Header from '../components/Header'
import Chats from '../components/Chats';
import _ from 'lodash'
import './Chatwindow.css'

const Chatwindow = ({activeUserId}) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId]
    const activeMsgs = state.messages[activeUserId]
    return (
        <div className = 'Chatwindow'>
            <Header user = {activeUser}/>
            <Chats messages = {_.values(activeMsgs)}/>
        </div>
    )
}

export default Chatwindow;