import { call, put, takeEvery } from "redux-saga/effects";
import { getQuoteSuccessAction } from "../actions/quote.actions";
import { QUOTE_ACTIONS_CONSTANTS } from "../constants/actions/quote.constants";
import { getQuote } from "../services/api.service";

function* getQuoteSaga(payload: any) {
    try {
        const response: string = yield call(getQuote, payload.name);
        yield put(getQuoteSuccessAction(response));
    } catch(error) {
        console.error(error);
    }
}

export const quoteSaga = [
    takeEvery(QUOTE_ACTIONS_CONSTANTS.GET_QUOTE, getQuoteSaga)
]