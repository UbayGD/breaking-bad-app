import { QUOTE_ACTIONS_CONSTANTS } from "../constants/actions/quote.constants";

const initialState: string = '';

export const quoteReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case QUOTE_ACTIONS_CONSTANTS.GET_QUOTE_SUCCESS:
            return action.quote;
        case QUOTE_ACTIONS_CONSTANTS.CLEAR_QUOTE:
            return '';
        default:
            return state;
    }
}