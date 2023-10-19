import * as actions from "@action/modal.action"
import {ActionType} from "typesafe-actions";

export type ModalState = {
    isOpenChallengeModal: boolean;
    isOpenFinishModal: boolean;
}

export type ModalActions = ActionType<typeof actions>;