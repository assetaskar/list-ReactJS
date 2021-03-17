import { combineReducers } from "redux";
import { createStore /* applyMiddleware, */ /* compose */ } from "redux";
import { listReducer, modalReducer } from "./reducers";

const rootReducer = combineReducers({
	list: listReducer,
	modal: modalReducer,
});

export default createStore(rootReducer);
