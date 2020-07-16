import React from 'react'
import './Main.css'
import Empty from './Empty'
import Chatwindow from '../containers/Chatwindow'


const Main = ({user, activeUserId}) => {

    const renderMainContent = () => {
    
        if(!activeUserId){
            return <Empty user = {user} activeUserId = {activeUserId}/>
        } else {
            return <Chatwindow activeUserId = {activeUserId}/>
        }
    } 

return <main className = "main">{renderMainContent()}</main>
}

export default Main;