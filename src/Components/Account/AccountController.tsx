import React, {useContext, useEffect, useState} from "react";
import Account from "./Account";
import {User} from "../../mocks/shared/interfaces";
import {useHistory} from "react-router";
import {PopUpContext} from "../../contexts/PopUpContext";
import axios from "axios";
import {useCookies} from "react-cookie";


/**
 * Controller of Account component which contains business logic of this component
 * */
const AccountController: React.FC = () => {

    const [userData, setUserData] = useState({} as User);

    const history = useHistory();

    const {onOpenPopUp} = useContext(PopUpContext);

    const [ , , removeCookie] = useCookies(['token']);

    const handleLogOut = () => {
        removeCookie('token');
        history.push('/signIn');
    }

    /**
     * Function for fetching user data from MSW
     * */
    const fetchUserData = async() => {
        try {
            const {data: {user}} = await axios.get<{user: User}>('/user');
            setUserData(user);
        } catch (e) {
            onOpenPopUp({
                header: 'Authentication error',
                message: 'Authentication data are invalid'
            });
            history.push('/signIn');
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <Account userData={userData} onLogOut={handleLogOut}/>
    )
};

export default AccountController;