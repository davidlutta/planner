import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import Profile from "./components/auth/Profile";

function App() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar/>
                    <Switch>
                        <Route exact path={'/'} component={Dashboard}/>
                        <Route path={"/project/:id"} component={ProjectDetails}/>
                        <Route path={'/signIn'} component={SignIn}/>
                        <Route path={'/signUp'} component={SignUp}/>
                        <Route path={'/create'} component={CreateProject}/>
                        <Route path={'/profile'} component={Profile}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
}

export default App;
