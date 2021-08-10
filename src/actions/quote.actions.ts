import { QUOTE_ACTIONS_CONSTANTS } from "../constants/actions/quote.constants"

export const getQuoteAction = (name: string) => {
    return {
        type: QUOTE_ACTIONS_CONSTANTS.GET_QUOTE,
        name
    }
}

export const getQuoteSuccessAction = (quote: string) => {
    return {
        type: QUOTE_ACTIONS_CONSTANTS.GET_QUOTE_SUCCESS,
        quote
    }
}

export const clearQuoteAction = () => {
    return {
        type: QUOTE_ACTIONS_CONSTANTS.CLEAR_QUOTE
    }
}