import React from 'react';
import {Route, Switch} from "react-router";
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
                    <Route path='/' exact component={Home}/>
                </Switch>
            </BrowserRouter>
        </>
  );
}

export default App;
