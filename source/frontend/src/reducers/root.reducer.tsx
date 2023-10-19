import { combineReducers } from 'redux';
import HomeReducer from '@reducer/home.reducer';
import DetailReducer from "@reducer/detail.reducer";
const RootReducer = combineReducers({
    HomeReducer,
    DetailReducer
})

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;