import { combineReducers } from "redux"
import UserReducer from "./UserReducer"
import FarmReducer from "./FarmReducer"

const rootReducer = combineReducers({ UserReducer , FarmReducer })



export default rootReducer