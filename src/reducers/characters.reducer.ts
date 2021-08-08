import { CHARACTERS_ACTIONS_CONSTANTS } from "../constants/actions/characters.constants";
import { CharacterModel } from "../models/character.model";

const initialState: {characters?: CharacterModel[]} = {};

type CharacterReducerCustomAction = {
    type: string; 
    payload?: CharacterModel[];
}

export const charactersReducer = (state = initialState, action: CharacterReducerCustomAction) => {
    switch (action.type) {
        case CHARACTERS_ACTIONS_CONSTANTS.GET_CHARACTERS_SUCCESS:
            return {...state, characters: action.payload};
        case CHARACTERS_ACTIONS_CONSTANTS.GET_CHARACTER_SUCCESS: {
            if (!state.characters) {
                return {...state, characters: action.payload};
            } else if (!action.payload?.some(r=> state.characters && state.characters.indexOf(r) >= 0)) {
                console.log(action.payload);
            }
            return state;
        }
        default:
            return state;
    }
}