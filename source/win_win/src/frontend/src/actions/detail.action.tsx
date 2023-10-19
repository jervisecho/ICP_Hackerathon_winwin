import {createAsyncAction} from "typesafe-actions";
import {Transaction} from "@type/data/transaction.type";
import {Event} from "@type/data/event.type";

export const ON_GET_EVENT_REQUEST = "detail/ON_GET_EVENT_REQUEST" as const;
export const ON_GET_EVENT_SUCCESS = "detail/ON_GET_EVENT_SUCCESS" as const;
export const ON_GET_EVENT_FAILURE = "detail/ON_GET_EVENT_FAILURE" as const;

export const ON_GET_TRANSACTION_REQUEST = "detail/ON_GET_TRANSACTION_REQUEST" as const;
export const ON_GET_TRANSACTION_SUCCESS = "detail/ON_GET_TRANSACTION_SUCCESS" as const;
export const ON_GET_TRANSACTION_FAILURE = "detail/ON_GET_TRANSACTION_FAILURE" as const;

export const onGetEventAction = createAsyncAction(ON_GET_EVENT_REQUEST, ON_GET_EVENT_SUCCESS, ON_GET_EVENT_FAILURE)<string, Event, any>();
export const onGetTransactionAction = createAsyncAction(ON_GET_TRANSACTION_REQUEST, ON_GET_TRANSACTION_SUCCESS, ON_GET_TRANSACTION_FAILURE)<string, Array<Transaction>, any>();