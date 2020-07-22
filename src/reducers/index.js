import user from './user'
import contacts from './contacts'
import messages from './messages'
import activeUserId from './activeUserId'
import typed from './typed'
import {combineReducers} from 'redux'

export default combineReducers({
    user,
    contacts,
    messages,
    typed,
    activeUserId
})