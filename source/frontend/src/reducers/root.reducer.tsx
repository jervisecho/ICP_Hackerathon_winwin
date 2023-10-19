import { combineReducers } from 'redux';
import HomeReducer from '@reducer/home.reducer';
const RootReducer = combineReducers({
    HomeReducer
})

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;