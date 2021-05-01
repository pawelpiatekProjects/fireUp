import React from "react";
import SignIn from "./SignIn";
import axios from "axios";

const SignInController: React.FC = () => {

    const handleSignIn = async (email: string, password: string) => {
        console.log('test handle submit');
        try {
            const {data} = await axios.post('/signIn', {
                email: email,
                password: password
            });

            console.log('sign in data: ', data);
        } catch (_e) {
            console.log(_e.message)
        }

    }

    return (
        <SignIn handleSubmit={handleSignIn}/>
    )
};

export default SignInController;