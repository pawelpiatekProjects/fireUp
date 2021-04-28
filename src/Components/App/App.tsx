import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import GlobalStyle from "../../assets/styles/globalStyles";
import Weather from "../Weather/Weather";
import Home from "../Home/Home";

function App() {
  return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Switch>
                    <Route path='/weather' exact component={Weather}/>
                    <Route path='/home' exact component={Home}/>
                    <Route render={() => <Redirect to='/home'/>}/>
                </Switch>
            </BrowserRouter>
        </>
  );
}

export default App;
