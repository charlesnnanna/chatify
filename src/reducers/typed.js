import { SET_TYPED_VALUE, SEND_MESSAGE } from "../constants/action-types";

export default (state = "", action) => {
    switch(action.type){
        case SET_TYPED_VALUE:
            return action.payload;
        
        case SEND_MESSAGE:
            return "";
        
        default:
            return state;
        
    }
    
}