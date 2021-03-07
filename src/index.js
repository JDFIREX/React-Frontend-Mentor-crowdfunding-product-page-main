import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import ReactDOM from "react-dom";
import Main from "./app/Main.js"

const App = () => {
    return(
        <React.StrictMode>
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="*" component={Main} />
                </Switch>
            </Router>
        </React.StrictMode>
    )
}


ReactDOM.render(<App /> , document.querySelector(".root"))
