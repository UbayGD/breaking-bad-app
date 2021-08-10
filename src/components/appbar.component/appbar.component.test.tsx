import { render, RenderResult, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as redux from 'react-redux'
import { MemoryRouter } from 'react-router-dom';
import { combineReducers, createStore, Store } from 'redux';
import { charactersReducer } from '../../reducers/characters.reducer';
import { quoteReducer } from '../../reducers/quote.reducer';
import AppBarComponent from './appbar.component';
import '../../i18n';

export function createTestStore() {
    const store = createStore(
        combineReducers({
            characters: charactersReducer,
            quote: quoteReducer,
        })
    ); return store;
}

let dom: RenderResult;
let store: Store;

beforeEach(() => {
    store = createTestStore();
    jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useLocation: () => ({
            pathname: "localhost:3000/"
        })
    }));
    jest.mock("react-i18next", () => ({
        useTranslation: () => ({ 
            t: (key: string) => key ,
            i18n: { language: 'en'}
        })
    }));
    dom = render(
        <Provider store={store}>
            <MemoryRouter>
                <AppBarComponent />
            </MemoryRouter>
        </Provider>
    );
})

test('renders title', () => {
    const appTitle = screen.getByText('Breaking Bad App');
    expect(appTitle).toBeInTheDocument();
});

test('render language dropdown', () => {
    const { queryByTestId } = dom;
    const select = queryByTestId('language-select');
    expect(select).toBeInTheDocument();
})