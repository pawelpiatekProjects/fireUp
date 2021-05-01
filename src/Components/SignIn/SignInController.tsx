import React, {useContext, useState, useEffect} from "react";
import SignIn from "./SignIn";
import axios from "axios";
import {PopUpContext} from "../../contexts/PopUpContext";
import {useHistory} from "react-router";

const SignInController: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false);
    const {onOpenPopUp} = useContext(PopUpContext);
    const history = useHistory();

    const handleSignIn = async(email: string, password: string) => {
        setIsLoading(true);
        try {
            const {data} = await axios.post('/signIn', {
                email: email,
                password: password
            });

            console.log('sign in data: ', data);

            history.push('/account');
        } catch (_e) {
            console.log(_e);
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