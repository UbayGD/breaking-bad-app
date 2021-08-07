import { plainToClass } from "class-transformer";
import { AnyAction } from "redux";
import { CHARACTERS_ACTIONS_CONSTANTS } from "../constants/actions/characters.constants";
import { CharacterModel } from "../models/character.model";

const initialState: {characters?: CharacterModel[]} = {};

export const charactersReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case CHARACTERS_ACTIONS_CONSTANTS.GET_CHARACTERS_SUCCESS:
            return {...state, characters: action.payload.map((character: object) => plainToClass(CharacterModel, character))};
        default:
            return state;
    }
}