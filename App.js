import React from "react";
import { Route, Switch } from "react-router-dom";
import UserInput from "./Components/UserInput";
import Home from "./Components/Home"
import NavBar from "./Components/Navbar";


const App = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/entry' component={UserInput} />
    </Switch>
)


export default App;