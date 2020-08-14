import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

//reducer
import smurfReducer from "./redux"

const store = createStore(smurfReducer, applyMiddleware(thunk))
export default store