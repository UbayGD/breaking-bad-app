import { render, RenderResult, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import * as reactRedux from 'react-redux'
import { MemoryRouter } from "react-router-dom";
import { createStore, combineReducers, Store } from "redux";
import { charactersReducer } from "../../reducers/characters.reducer";
import { quoteReducer } from "../../reducers/quote.reducer";
import HomeComponent from "./home.component";
import '../../i18n';
import { CharacterModel } from "../../models/character.model";
import { plainToClass } from "class-transformer";

export function createTestStore() {
    const store = createStore(
        combineReducers({
            characters: charactersReducer,
            quote: quoteReducer,
        })
    ); 
    return store;
}

let dom: RenderResult;
let store: Store;

const TEST_CHARACTER = plainToClass(CharacterModel, {
    char_id: 0,
    name: 'Perry',
    nickname: 'The Platypus',
    birthday: '01-03-1999',
    occupation: ['Pet', 'Secret Agent'],
    appearance: [1],
    portrayed: 'Himself',
    status: 'Active',
    img: ''
}) 

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

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    useSelectorMock.mockReturnValue([
        TEST_CHARACTER
    ])

    dom = render(
        <Provider store={store}>
            <MemoryRouter>
                <HomeComponent />
            </MemoryRouter>
        </Provider>
    );
})

test('renders character card', () => {
    const name = screen.getByText(TEST_CHARACTER.name)
    expect(name).toBeInTheDocument();

    const nickname = screen.getByText(TEST_CHARACTER.nickname)
    expect(nickname).toBeInTheDocument();
});