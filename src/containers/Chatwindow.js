import React from 'react'
import store from '../store'
import Header from '../components/Header'

const Chatwindow = ({activeUserId}) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId]
    return (
        <div className = 'Chatwindow'>
            <Header user = {activeUser}/>
        </div>
    )
}

export default Chatwindow;