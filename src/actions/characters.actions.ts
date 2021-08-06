import { CHARACTERS_ACTIONS_CONSTANTS } from "../constants/actions/characters.constants"
import { CharacterModel } from "../models/character.model"

export const getCharactersAction = () => {
    return {
        type: CHARACTERS_ACTIONS_CONSTANTS.GET_CHARACTERS
    }
}

export const getCharactersSuccessAction = (payload: CharacterModel[]) => {
    return {
        type: CHARACTERS_ACTIONS_CONSTANTS.GET_CHARACTERS_SUCCESS,
        payload
    }
}

export const getCharactersErrorAction = () => {
    return {
        type: CHARACTERS_ACTIONS_CONSTANTS.GET_CHARACTERS_ERROR
    }
}