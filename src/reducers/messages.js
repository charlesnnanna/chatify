import { getMessages } from "../static-data";

export default (state = getMessages(4) , action) => {
    return state;
}