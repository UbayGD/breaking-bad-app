import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { charactersReducer } from '../reducers/characters.reducer';
import { quoteReducer } from '../reducers/quote.reducer';
import rootSaga from '../sagas';

let store = undefined;

const rootReducer = combineReducers({
    characters: charactersReducer,
    quote: quoteReducer
})

const configureStore = () => { 
    const sagaMiddleware = createSagaMiddleware();
    store = {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    }
    return store;
};

export default configureStore;