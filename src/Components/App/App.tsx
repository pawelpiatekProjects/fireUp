import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import GlobalStyle from "../../assets/styles/globalStyles";
import WeatherController from "../Weather/WeatherController";
import Home from "../Home/Home";
import PopUpContextProvider from "../../contexts/PopUpContext";
import PopUp from "../PopUp/PopUp";
import SignInController from "../SignIn/SignInController";

function App() {
  return (
        <>
            <GlobalStyle/>
            <PopUpContextProvider>
                <PopUp/>
                <BrowserRouter>
                    <Switch>
                        <Route path='/signIn' exact component={SignInController}/>
                        <Route path='/weather' exact component={WeatherController}/>
                        <Route path='/home' exact component={Home}/>
                        <Route render={() => <Redirect to='/home'/>}/>
                    </Switch>
                </BrowserRouter>
            </PopUpContextProvider>
        </>
  );
}

export default App;
