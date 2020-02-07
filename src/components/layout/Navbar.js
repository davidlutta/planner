import React from 'react';
import {Link} from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from "react-redux";
const Navbar = (props) =>{
    const {auth, profile} = props;
    if (!auth) {
        return (
            <nav className="nav-wrapper grey darken-2">
                <div className="container">
                    <Link to={'/'} className={"brand-logo"}>Planner</Link>
                    <SignedInLinks profile={profile}/>
                </div>
            </nav>
        );
    }else {
        return (
            <nav className="nav-wrapper grey darken-2">
                <div className="container">
                    <Link to={'/'} className={"brand-logo"}>Planner</Link>
                    <SignedOutLinks/>
                </div>
            </nav>
        );
    }
};
const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth.isEmpty,
        profile: state.firebase.profile
    };
};
export default connect(mapStateToProps)(Navbar);
