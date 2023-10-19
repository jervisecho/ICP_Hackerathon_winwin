import {HomeState} from "@type/home.type.tsx";
import {createReducer} from "typesafe-actions";
import {GET_EVENT_SUCCESS} from "@action/home.action.tsx";

const initialState: HomeState = {
    events: []
}

const HomeReducer = createReducer(initialState, {
    [GET_EVENT_SUCCESS]: (state, action) => ({
        ...state,
        events: state.events.concat(action.payload)
    })
});

export default HomeReducer;