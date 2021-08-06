import { call, put, takeEvery } from 'redux-saga/effects';
import { getCharactersErrorAction, getCharactersSuccessAction } from "../actions/characters.actions";
import { CHARACTERS_ACTIONS_CONSTANTS } from "../constants/actions/characters.constants";
import { CharacterModel } from "../models/character.model";
import { getAllCharacters } from "../services/api.service";

function* getCharacters() {
    try {
        const response: CharacterModel[] = yield call(getAllCharacters);
        yield put(getCharactersSuccessAction(response));
    } catch (error) {
        yield put(getCharactersErrorAction());
    }
}

export const charactersSaga = [
    takeEvery(CHARACTERS_ACTIONS_CONSTANTS.GET_CHARACTERS, getCharacters)
]