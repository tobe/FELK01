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
                passwordMismatch: true ? (this.state.originalPass != this.state.repeatedPass /*&& this.state.repeatedPass.length > 0*/) : false,
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

                    {
                        (this.state.invalidEmail) ?
                            <small className="Register__warning">
                                The E-Mail address is invalid
                            </small>
                        :
                            null
                    }

                    <input 
                        type="password"
                        className="InputForm__input"
                        placeholder="Passphrase"
                        required
                        onChange={(e) => this.handlePassphraseChange(e, 'original')}
                    />

                    {
                        (this.state.passwordTooShort) ?
                            <small className="Register__warning">
                                Password must be at least 8 characters long
                            </small>
                        :
                            null
                    }

                    <input 
                        type="password"
                        className="InputForm__input"
                        placeholder="Repeat passphrase"
                        required
                        onChange={(e) => this.handlePassphraseChange(e, 'repeated')}
                    />

                    {
                        (this.state.passwordMismatch) ?
                            <small className="Register__warning">
                                Passwords do not match
                            </small>
                        :
                            null
                    }

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
                </form>
                <small>Already have an account? Login <Link to="/login">here</Link>.</small>
            </div>
        );
    }
}

export default Register