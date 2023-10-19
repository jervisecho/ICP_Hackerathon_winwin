import {createAsyncAction} from "typesafe-actions";
import {Event} from "@type/data/event.type";

export const GET_EVENT_REQUEST = "home/GET_EVENT_REQUEST" as const;
export const GET_EVENT_SUCCESS = "home/GET_EVENT_SUCCESS" as const;
export const GET_EVENT_FAILURE = "home/GET_EVENT_FAILURE" as const;

export const onGetEventAction = createAsyncAction(GET_EVENT_REQUEST, GET_EVENT_SUCCESS, GET_EVENT_FAILURE)<undefined, Event[], any>();