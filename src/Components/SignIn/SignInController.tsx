import React from "react";
import SignIn from "./SignIn";

const SignInController: React.FC = () => {

    const handleSignIn = (email: string, password: string) => {
        console.log(`email: ${email}, password: ${password}`);
    }

    return (
        <SignIn handleSubmit={handleSignIn}/>
    )
};

export default SignInController;