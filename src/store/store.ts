import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { charactersReducer } from '../reducers/characters.reducer';
import rootSaga from '../sagas';

let store = undefined;

const configureStore = () => { 
    const sagaMiddleware = createSagaMiddleware();
    store = {
        ...createStore(charactersReducer, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    }
    return store;
};

export default configureStore;