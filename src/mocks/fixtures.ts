import {User} from './shared/interfaces';
import {compare} from './shared/token';

/* List of users who can sign into the app **/
export const users: User[] = [
    {
        login: 'jkowalski',
        name: 'Jan',
        lastName: 'Kowalski',
        email: 'j.kowalski@email.com',
        password: '12345678'
    }
];

/* Sign in function **/
export const onSignIn = (email: string, password: string) => {
    let response: {
        message: string,
        data: {} | User
    };

    const user = users.find(user => user.email === email);

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

/* Function that returns user data when token is valid **/
export const getUser = (token: string) => {
    return users.find(user => compare(token, user.email));
}