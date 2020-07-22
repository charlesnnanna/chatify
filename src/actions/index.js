import {SET_ACTIVE_USER_ID, SET_TYPED_VALUE, SEND_MESSAGE, CLEAR_TYPED} from '../constants/action-types'

export const setActiveUserId = (id) => ({
    type : SET_ACTIVE_USER_ID,
    payload : id  
})

export const setTypedValue = (value) => ({
    type : SET_TYPED_VALUE,
    payload : value
})

export const sendMessage = (message, userId) => ({
    type : SEND_MESSAGE,
    payload : {
        message,
        userId
    }
})

