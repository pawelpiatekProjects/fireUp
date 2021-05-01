import {User} from './shared/interfaces';
import {compare} from './shared/token';

export const users: User[] = [
    {
        login: 'jkowalski',
        name: 'Jan',
        lastName: 'Kowalski',
        email: 'j.kowalski@email.com',
        password: '12345678'
    }
];

export const onSignIn = (email: string, password: string) => {
    let response: {
        message: string,
        data: {} | User
    };

    const user = users.find(user => user.email === email);
    console.log('user from backend: ', user)

    if(user) {
        if(user.password === password) {
            response = {
                message: 'Success',
                data: user
            };
        } else {
            response = {
                message: 'Incorrect password',
                data: {}
            }
        }
    } else {
        response = {
            message: 'User not found',
            data: {}
        }
    }

    return response;
}

export const getUser = (token: string) => {
    return users.find(user => compare(token, user.email));
}