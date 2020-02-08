import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {signUp} from "../../store/actions/AuthActions";

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        imageUrl: '',
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        passwordError: '',
        profileImageError: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };


    validate = () => {
        let firstNameError = '';
        if (!this.state.firstName) {
            firstNameError = 'Please Enter your first Name';
            this.setState({
                lastNameError: null,
                emailError: null,
                passwordError: null,
                profileImageError: null,
                firstNameError: firstNameError
            });
            return false;
        }
        let lastNameError = '';
        if (!this.state.lastName) {
            lastNameError = "Please Enter your last Name";
            this.setState({
                firstNameError: null,
                emailError: null,
                passwordError: null,
                profileImageError: null,
                lastNameError: lastNameError
            });
            return false;
        }

        let emailError = "";
        if (this.state.email.length === 0) {
            emailError = "Please enter email";
            this.setState({
                firstNameError: null,
                lastNameError: null,
                passwordError: null,
                profileImageError: null,
                emailError: emailError
            });
            return false;
        } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
            emailError = "Invalid Email address";
            this.setState({
                firstNameError: null,
                lastNameError: null,
                passwordError: null,
                profileImageError: null,
                emailError: emailError
            });
            return false;
        }

        let passwordError = '';
        if (!this.state.password) {
            passwordError = "please Enter a password";
            this.setState({
                firstNameError: null,
                lastNameError: null,
                emailError: null,
                profileImageError: null,
                passwordError: passwordError
            });
            return false;
        } else if (this.state.password.length <= 6) {
            passwordError = "Your Password must be more than 6 characters";
            this.setState({
                firstNameError: null,
                lastNameError: null,
                emailError: null,
                profileImageError: null,
                passwordError: passwordError
            });
            return false;
        }

        let profileImageError = '';
        if (!this.state.imageUrl) {
            profileImageError = 'Please pick a profile image';
            this.setState({
                firstNameError: null,
                lastNameError: null,
                emailError: null,
                passwordError: null,
                profileImageError: profileImageError
            });
            return false;
        }
        return true;
    };
    handleImage = (e) => {
        const image = e.target.files[0];
        this.setState({
            imageUrl: image
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.props.signUp(this.state);
        }
    };

    render() {
        const {auth, authError} = this.props;
        if (auth.uid) return <Redirect to={'/'}/>;
        return (
            <div className={"container"}>
                <form className="card white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <br/>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="red-text center">
                        {this.state.firstNameError}
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="red-text center">
                        {this.state.lastNameError}
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="red-text center">
                        {this.state.emailError}
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="red-text center">
                        {this.state.passwordError}
                    </div>
                    <div className="input-field">
                        <p>Add Profile Picture</p>
                        <input type="file" name="imageUrl" id="imageUrl" accept={'images/jgp,png'}
                               onChange={this.handleImage}/>
                    </div>
                    <div className="red-text center">
                        {this.state.profileImageError}
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
