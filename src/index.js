import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import ReactDOM from "react-dom";
import './index.css';


const Main = () => {
    return (
        <div>
            <h1>Main App</h1>
        </div>
    )
}

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

//     "homepage": "https://github.com/JDFIREX/React-Frontend-Mentor-crowdfunding-product-page-main#readme",