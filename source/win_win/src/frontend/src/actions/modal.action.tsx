import {createAction} from "typesafe-actions";

export const ON_TOGGLE_CHALLENGE_MODAL = "modal/challenge/ON_TOGGLE_CHALLENGE_MODAL" as const;
export const ON_TOGGLE_FINISH_MODAL = "modal/finish/ON_TOGGLE_FINISH_MODAL" as const;

export const onToggleChallengeModalAction = createAction(ON_TOGGLE_CHALLENGE_MODAL)<undefined>();
export const onToggleFinishModalAction = createAction(ON_TOGGLE_FINISH_MODAL)<undefined>();