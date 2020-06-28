import { combineReducers } from 'redux';
import auth from "./auth"
import adminmsg from "./adminmsg"

const rootReducer = combineReducers({
    auth,
    adminmsg
})

export default rootReducer