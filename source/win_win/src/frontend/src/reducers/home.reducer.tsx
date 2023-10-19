import {HomeActions, HomeState} from "@type/home.type";
import {createReducer} from "typesafe-actions";
import {GET_EVENT_SUCCESS} from "@action/home.action";

const initialState: HomeState = {
    events: []
}

const HomeReducer = createReducer<HomeState, HomeActions>(initialState, {
    [GET_EVENT_SUCCESS]: (state, action) => ({
        ...state,
        events: state.events.concat(action.payload)
    })
});

export default HomeReducer;