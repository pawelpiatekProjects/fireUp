import {rest} from 'msw';
import {users, onSignIn, getUser} from './fixtures';
import {createToken} from './shared/token';


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
    rest.get('/user', (req, res, ctx) => {

        const {token} = req.cookies;
        console.log('token from backend: ', token);
        if(token) {
            const user = getUser(token);
            if(user) {
                return res(ctx.status(200), ctx.json({
                    user: user
                }));
            } else {
                return res(ctx.status(401), ctx.json({
                    message: 'Unauthorized'
                }))
            }
        } else {
            return res(ctx.status(401), ctx.json({
                message: 'Unauthorized'
            }))
        }

    }),
    rest.post<SignInBody, SignInResponse>('/signIn', (req, res, ctx) => {
        const {email, password} = req.body;
        const handlerResponse = onSignIn(email, password);

        if(Object.keys(handlerResponse.data).length > 0) {
            const fakeToken = createToken(email);
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

