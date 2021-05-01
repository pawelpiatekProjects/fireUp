import {rest} from 'msw';
import {users, onSignIn} from './fixtures';
import {User} from "../shared/interfaces";

interface SignInBody {
    email: string;
    password: string
}

interface SignInResponse {
    message: string;
    user: User;
}

export const handlers = [
    rest.get('/users', (req, res, ctx)=> {
        return res(ctx.status(200), ctx.json(users));
    }),
    rest.post<SignInBody, SignInResponse>('/signIn', (req, res, ctx) => {

        const handlerResponse = onSignIn(req.body.email, req.body.password);

        if(Object.keys(handlerResponse.data).length > 0) {
            return res(
                ctx.status(200),
                ctx.json({
                    message: handlerResponse.message,
                    user: handlerResponse.data
                } as SignInResponse)
            )
        } else {
            return res(
                ctx.status(400),
                ctx.json({
                    message: handlerResponse.message,
                    user: handlerResponse.data
                } as SignInResponse)
            )
        }
    })
];

