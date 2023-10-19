import {DetailActions, DetailState} from "@type/detail.type";
import {createReducer} from "typesafe-actions";
import {ON_GET_EVENT_SUCCESS, ON_GET_TRANSACTION_SUCCESS} from "@action/detail.action";

const initialState: DetailState = {
    event: undefined,
    transactions: []
}

const DetailReducer = createReducer<DetailState, DetailActions>(initialState, {
    [ON_GET_EVENT_SUCCESS]: (state, action) => ({
        ...state,
        event: action.payload
    }),
    [ON_GET_TRANSACTION_SUCCESS]: (state, action) => ({
        ...state,
        transactions: action.payload
    })
})

export default DetailReducer;