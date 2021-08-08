import { call, put, takeEvery } from 'redux-saga/effects';
import { getCharactersErrorAction, getCharactersSuccessAction, getCharacterSuccessAction } from "../actions/characters.actions";
import { CHARACTERS_ACTIONS_CONSTANTS } from "../constants/actions/characters.constants";
import { CharacterModel } from "../models/character.model";
import { getAllCharacters, getCharacter } from "../services/api.service";

function* getCharactersSaga() {
    try {
        const response: CharacterModel[] = yield call(getAllCharacters);
        yield put(getCharactersSuccessAction(response));
    } catch (error) {
        yield put(getCharactersErrorAction());
    }
}

function* getCharacterSaga(payload: any) {
    try {
        const response: CharacterModel[] = yield call(getCharacter, payload.id);
        yield put(getCharacterSuccessAction(response));
    } catch (error) {
        console.error(error)
    }
}

export const charactersSaga = [
    takeEvery(CHARACTERS_ACTIONS_CONSTANTS.GET_CHARACTERS, getCharactersSaga),
    takeEvery(CHARACTERS_ACTIONS_CONSTANTS.GET_CHARACTER, getCharacterSaga)
]