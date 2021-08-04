const baseRequest = async (params: string) => {
    const response = await fetch(`https://www.breakingbadapi.com/api/${params}`);
    return response.json();
}

export const getAllCharacters = async () => {
    return await baseRequest('characters');
}

export const getCharacter = async (id: number) => {
    return await baseRequest(`characters/${id}`);
}

export const getQuote = async (characterName: string) => {
    return await baseRequest(`quote/random?author=${characterName}`);
}