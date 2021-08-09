import { CHARACTERS_ACTIONS_CONSTANTS } from "../constants/actions/characters.constants";
import { CharacterModel } from "../models/character.model";

const initialState: CharacterModel[] = [];

type CharacterReducerCustomAction = {
    type: string; 
    payload?: CharacterModel[];
}

export const charactersReducer = (state = initialState, action: CharacterReducerCustomAction) => {
    switch (action.type) {
        case CHARACTERS_ACTIONS_CONSTANTS.GET_CHARACTERS_SUCCESS:
            return action.payload;
        case CHARACTERS_ACTIONS_CONSTANTS.GET_CHARACTER_SUCCESS: {
            if (state.length === 0) {
                return action.payload;
            }
            return state;
        }
        default:
            return state;
    }
}