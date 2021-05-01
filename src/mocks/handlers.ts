import {rest} from 'msw';
import {users, onSignIn} from './fixtures';


interface SignInBody {
    email: string;
    password: string
}

interface SignInResponse {
    message: string;
    token?: string;
}

export const handlers = [
    rest.get('/users', (req, res, ctx)=> {
        return res(ctx.status(200), ctx.json(users));
    }),
    rest.post<SignInBody, SignInResponse>('/signIn', (req, res, ctx) => {
        const {email, password} = req.body;
        const handlerResponse = onSignIn(email, password);

        if(Object.keys(handlerResponse.data).length > 0) {
            const fakeToken = email.toLowerCase() + password.toLowerCase();
            return res(
                ctx.status(200),
                ctx.json({
                    message: handlerResponse.message,
                    token: fakeToken
                } as SignInResponse)
            )
        } else {
            return res(
                ctx.status(403),
                ctx.json({
                    message: handlerResponse.message
                } as SignInResponse)
            )
        }
    })
];

