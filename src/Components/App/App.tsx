import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import WeatherController from "../Weather/WeatherController";
import Home from "../Home/Home";
import PopUpContextProvider from "../../contexts/PopUpContext";
import PopUp from "../PopUp/PopUp";
import SignInController from "../SignIn/SignInController";
import AccountController from "../Account/AccountController";
import Navigation from "../Navigation/Navigation";
import GlobalStyle from "../../assets/styles/globalStyles";
import {Wrapper, NavWrapper, ContentWrapper} from './AppStyles';

function App() {
  return (
        <>
            <GlobalStyle/>
            <PopUpContextProvider>
                <PopUp/>
                <BrowserRouter>
                    <Wrapper>
                        <NavWrapper>
                            <Navigation/>
                        </NavWrapper>
                        <ContentWrapper>
                            <Switch>
                                <Route path='/account' exact component={AccountController}/>
                                <Route path='/signIn' exact component={SignInController}/>
                                <Route path='/weather' exact component={WeatherController}/>
                                <Route path='/home' exact component={Home}/>
                                <Route render={() => <Redirect to='/home'/>}/>
                            </Switch>
                        </ContentWrapper>
                    </Wrapper>
                </BrowserRouter>
            </PopUpContextProvider>
        </>
  );
}

export default App;
