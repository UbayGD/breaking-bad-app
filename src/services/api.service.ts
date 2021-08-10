import { plainToClass } from "class-transformer";
import { CharacterModel } from "../models/character.model";

const baseRequest = async (params: string): Promise<any> => {
    const response = await fetch(`https://www.breakingbadapi.com/api/${params}`);
    return response.json();
}

export const getAllCharacters = async (): Promise<CharacterModel[]> => {
    const responseCharacters: object[] = await baseRequest('characters');
    return responseCharacters.map(character => plainToClass(CharacterModel, character));
}

export const getCharacter = async (id: number) => {
    const responseCharacter: object[] = await baseRequest(`characters/${id}`);
    return responseCharacter.map(character => plainToClass(CharacterModel, character));
}

export const getQuote = async (characterName: string) => {
    const response = await baseRequest(`quote/random?author=${characterName.replaceAll(' ', '+')}`);
    return response[0].quote;
}