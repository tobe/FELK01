import React,  { Component } from 'react';
import { Redirect } from 'react-router-dom'

import 'styles/components/basic/LoginForm.css'

class LoginButton extends Component {
    constructor(props) {
        super(props)
    }

    state = {redirect: false}
    
    handleLogin = () => {
        this.props.authenticator.login(() => this.setState({redirect: true}))
    }

    render() {
        return this.state.redirect ? (
            <Redirect to={this.props.private}/>
        ) : (
            <div className={'LoginForm__button'} onClick={this.handleLogin}>
                {this.props.title}
            </div>
        )
    }
}


const LoginForm = props => (
    <div>
        <div className={'LoginForm'}>
            <p>To access <span className='alert'>{props.private}</span> page you have to sign in.</p>
            
            <input 
                autoFocus 
                type='text' 
                className={'LoginForm__input'}
                placeholder='Username'
            />
            
            <input 
                type='password' 
                className={'LoginForm__input'}
                placeholder='Passphrase'    
            />

            <LoginButton title={'Login'} {...props}/>
        </div>        
    </div>    
)

export default LoginForm