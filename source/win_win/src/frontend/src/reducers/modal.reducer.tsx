import {ModalActions, ModalState} from "@type/modal.type.tsx";
import {createReducer} from "typesafe-actions";
import {ON_TOGGLE_CHALLENGE_MODAL, ON_TOGGLE_FINISH_MODAL} from "@action/modal.action.tsx";

const initialState: ModalState = {
    isOpenFinishModal: false,
    isOpenChallengeModal: false,
}

const ModalReducer = createReducer<ModalState, ModalActions>(initialState, {
    [ON_TOGGLE_FINISH_MODAL]: (state, _action) => ({
        ...state,
        isOpenFinishModal: !state.isOpenFinishModal
    }),
    [ON_TOGGLE_CHALLENGE_MODAL]: (state, _action) => ({
        ...state,
        isOpenChallengeModal: !state.isOpenChallengeModal
    }),
})

export default ModalReducer;