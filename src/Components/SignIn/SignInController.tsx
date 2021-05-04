import React, {useContext, useState, useEffect} from "react";
import SignIn from "./SignIn";
import axios from "axios";
import {PopUpContext} from "../../contexts/PopUpContext";
import {useHistory} from "react-router";
import {useCookies} from "react-cookie";

interface SignInResponse {
    message: string;
    token: string;
}

/* Controller for SignIn component **/
const SignInController: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false);

    const {onOpenPopUp} = useContext(PopUpContext);

    const history = useHistory();

    const [, setCookie] = useCookies(['token']);

    /* Sign in function which sends request to MSW and as a result sets token in cookie or present error message **/
    const handleSignIn = async(email: string, password: string) => {
        setIsLoading(true);
        try {
            const {data} = await axios.post<SignInResponse>('/signIn', {
                email: email,
                password: password
            });
            setCookie('token', data.token);
            history.push('/account');
        } catch (_e) {
            onOpenPopUp({
                header: 'Sign in failed',
                message: 'Please try again'
            });
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        return () => {
            setIsLoading(false);
        }
    })

    return (
        <SignIn handleSubmit={handleSignIn} isLoading={isLoading}/>
    )
};

export default SignInController;