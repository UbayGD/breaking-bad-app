import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore, combineReducers, Store } from 'redux';
import App from './App';
import AppBarComponent from './components/appbar.component/appbar.component';
import { charactersReducer } from './reducers/characters.reducer';
import { quoteReducer } from './reducers/quote.reducer';
import './i18n';

export function createTestStore() {
  const store = createStore(
      combineReducers({
          characters: charactersReducer,
          quote: quoteReducer,
      })
  ); return store;
}

let store: Store = createTestStore();

test('renders without crash', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
});
