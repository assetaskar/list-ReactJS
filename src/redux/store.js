import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { dataReducer, listReducer, modalReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchLoadData } from "./sagas";

const rootReducer = combineReducers({
	list: listReducer,
	modal: modalReducer,
	data: dataReducer,
});

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLoadData);
