import React,  { Component } from 'react';
import { Redirect } from 'react-router-dom'
import classnames from 'classnames'

import 'styles/components/basic/LoginForm.css'

class LoginButton extends Component {
    constructor(props) {
        super(props)
    }

    state = {redirect: false}
    
    handleLogin = (e) => {
        this.props.authenticator.login(() => this.setState({redirect: true}))
    }

    render() {
        return this.state.redirect ? (
            <Redirect to={this.props.private}/>
        ) : (
            <button type="submit" className="LoginForm__buton" onClick={this.handleLogin}>
                {this.props.title}
            </button>
        )
    }
}

class LoginForm extends React.Component {
    state = {
        visible: false
    }

    constructor() {
        super();

        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        let passphraseClass = classnames({
            'fa': 1,
            'fa-eye-slash': this.state.visible,
            'fa-eye': !this.state.visible
        })
        let inputType = this.state.visible == 1 ? 'password' : 'text';

        return (
            <div className="LoginForm__container">
                <h2>To access the Wishlist, you have to sign in!</h2>
                <form className="LoginForm">
                    <input 
                        autoFocus
                        type='text'
                        className={'LoginForm__input'}
                        placeholder='Username'
                        required
                    />
                    
                    <div className="LoginForm__passphrase-wrapper">
                        <input 
                            type={inputType}
                            className={'LoginForm__input LoginForm__passphrase'}
                            placeholder='Passphrase'
                            required
                        />
                        <i onClick={this.toggleVisibility} className={passphraseClass} aria-hidden="true"></i>
                    </div>

                    <LoginButton title={'Sign in'} {...this.props}/>
                </form>        
            </div>
        );
    }
}

export default LoginForm