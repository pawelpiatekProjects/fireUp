import React, {useState} from "react";
import Navigation from "./Navigation";
import * as variables from "../../assets/styles/variables";
import {useCookies} from "react-cookie";

/* Controller which contains logic for custom Navigation **/
const NavigationController: React.FC = () => {

    const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

    const toggleSideDrawer = () => {
        setIsSideDrawerOpen(prevState => !prevState)
    }

    const activeStyle = {
        background: variables.secondaryYellow,
        color: variables.colorLight
    }

    const accountActiveStyle = {
        color: variables.secondaryYellow
    }

    const [cookies] = useCookies(['token']);
    const {token} = cookies;

    return (
        <Navigation
            activeStyle={activeStyle}
            token={token}
            accountActiveStyle={accountActiveStyle}
            toggleSideDrawer={toggleSideDrawer}
            isSideDrawerOpen={isSideDrawerOpen}
        />
    )
};

export default NavigationController