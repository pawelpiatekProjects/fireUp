import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import GlobalStyle from "../../assets/styles/globalStyles";
import Weather from "../Weather/Weather";
import Home from "../Home/Home";
import PopUpContextProvider from "../../contexts/PopUpContext";
import PopUp from "../PopUp/PopUp";

function App() {
  return (
        <>
            <GlobalStyle/>
            <PopUpContextProvider>
                <PopUp/>
                <BrowserRouter>
                    <Switch>
                        <Route path='/weather' exact component={Weather}/>
                        <Route path='/home' exact component={Home}/>
                        <Route render={() => <Redirect to='/home'/>}/>
                    </Switch>
                </BrowserRouter>
            </PopUpContextProvider>
        </>
  );
}

export default App;
