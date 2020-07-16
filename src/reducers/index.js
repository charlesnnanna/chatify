import user from './user'
import contacts from './contacts'
import messages from './messages'
import activeUserId from './activeUserId'
import {combineReducers} from 'redux'

export default combineReducers({
    user,
    contacts,
    messages,
    activeUserId
})