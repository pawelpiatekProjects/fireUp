/* This file contains features for creating and comparing fake tokens **/

export const createToken = (email: string) => {
    return `token${email.split('@')[0]}`
}

export const compare = (token: string, email: string) => {
    const newToken = createToken(email);
    return token === newToken;
}