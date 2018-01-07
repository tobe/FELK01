import React from 'react'
import { Redirect, Link } from 'react-router-dom'

import 'styles/components/pages/Register.css'

class Register extends React.Component {
    state = {
        originalPass: '',
        repeatedPass: '',
        invalidEmail: false,
        passwordMismatch: false,
        passwordTooShort: false
    }

    constructor() {
        super();

        this.handlePassphraseChange = this.handlePassphraseChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.disableButton = this.disableButton.bind(this);
    }

    disableButton() {
        if(!this.state.invalidEmail &&
           !this.state.passwordMismatch &&
           !this.state.passwordTooShort)
        {
            return false;
        }

        return true;
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    handleEmailChange(event) {
        this.setState({
            invalidEmail: true ? !this.validateEmail(event.target.value) : false
        });
    }

    handlePassphraseChange(event, type) {
        const updatePasswordStatus = () => {
            this.setState({
                passwordMismatch: true ? this.state.originalPass != this.state.repeatedPass : false,
                passwordTooShort: true ? this.state.originalPass.length < 8 : false
            })
        }

        switch(type) {
            case 'original':
                this.setState({originalPass: event.target.value}, updatePasswordStatus);
            break;
            case 'repeated':
                this.setState({repeatedPass: event.target.value}, updatePasswordStatus);
            break;
        }
    }

    render() {
        let disableButton = this.disableButton();
        let displayProblems = false;
        let problems = [];
        if(this.state.invalidEmail)
            problems.push("The e-mail you have entered is invalid");
        if(this.state.passwordMismatch)
            problems.push("Passwords do not match");
        if(this.state.passwordTooShort)
            problems.push("The password you have chosen is too short");

        if(problems.length > 0) displayProblems = true;

        return (
            <div className="RegisterForm__container">
                <h2>Register an account with us</h2>
                <form className="InputForm">
                    <input 
                        autoFocus
                        type="email"
                        className="InputForm__input"
                        placeholder="E-mail address"
                        required
                        onChange={this.handleEmailChange}
                    />

                    <input 
                        type="password"
                        className="InputForm__input"
                        placeholder="Passphrase"
                        required
                        onChange={(e) => this.handlePassphraseChange(e, 'original')}
                    />

                    <input 
                        type="password"
                        className="InputForm__input"
                        placeholder="Repeat passphrase"
                        required
                        onChange={(e) => this.handlePassphraseChange(e, 'repeated')}
                    />

                    <input 
                        type="text"
                        className="InputForm__input"
                        placeholder="First name (optional)"
                    />

                    <input 
                        type="text"
                        className="InputForm__input"
                        placeholder="Last name (optional)"
                    />

                    <button
                        type="submit"
                        className="InputForm__button Register__button"
                        onClick={this.handleLogin}
                        disabled={disableButton}>
                            Register
                    </button>

                    {
                        displayProblems ? 
                            problems.map((problem, key) => {
                                return (
                                    <ul className="Register__warnings" key={key}>
                                        <li>
                                            <small className="Register__warning">
                                                { problem }
                                            </small>
                                        </li>
                                    </ul>
                                )
                            })
                        :
                            null
                    }
                </form>
                <small>Already have an account? Access your Wishlist <Link to="/wishlist">here</Link>.</small>
            </div>
        );
    }
}

export default Register