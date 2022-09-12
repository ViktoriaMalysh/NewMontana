import { combineReducers } from "redux";
import { reducerApi } from "./reducers/reducerApi";

export const rootReducers = combineReducers({
	api: reducerApi,
});
