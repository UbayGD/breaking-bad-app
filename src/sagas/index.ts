import { all } from "redux-saga/effects";
import { charactersSaga } from "./characters.saga";
import { quoteSaga } from "./quote.saga";

export default function* rootSaga() {
    yield all([
        ...charactersSaga,
        ...quoteSaga
    ])
}