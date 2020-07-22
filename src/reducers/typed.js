import { SET_TYPED_VALUE } from "../constants/action-types";

export default (state = "", action) => {
    switch(action.type){
        case SET_TYPED_VALUE:
            return action.payload;
        
        default:
            return state;
        
    }
    
}