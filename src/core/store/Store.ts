import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { RecipeMaker } from "./slicers";

export interface IGenericAction<K = any> {
	type: string;
	payload: K;
}

const rootReducer = combineReducers({
	recipeMaker: RecipeMaker.reducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export default store;
