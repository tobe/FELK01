'use strict'

import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import 'styles/main.css'

import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom'  

import Nav from 'components/basic/Nav.jsx'
import Home from 'components/pages/Home.jsx'
import About from 'components/pages/About.jsx'
import News from 'components/pages/News.jsx'
import Private from 'components/pages/Private.jsx'
import PrivateRoute from 'components/basic/PrivateRoute.jsx'
import LoginForm from 'components/basic/LoginForm.jsx'

const links = ['Home', 'About', 'News', 'Private']


//------------------------------------
// Faking an authentication service
//------------------------------------
const authenticator = {
    authenticated: false,

    login(callback) {
        this.authenticated = this.authenticated ? false : true
        if (callback) callback()
    },

    logout() {
        this.login(null)
    }
}

//------------------------------------
// The main component
//------------------------------------
const App = () => (
    <Router>        
        <div>
            <header>
                <Nav links={links} authenticator={authenticator}/>
                <Nav mobile links={links} authenticator={authenticator}/>
            </header>    
                
            <div className="container">            
                <h1 className='header'>React Router</h1>
                <main>
                    <Route exact path="/" render={() => <Redirect to='/home'/>} />
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/news" component={News}/>
                    <Route exact path="/login" render={() => 
                        <LoginForm 
                            private="/private"
                            authenticator={authenticator}
                        />
                    }/>

                    <PrivateRoute path="/private"
                        component={Private}
                        authenticator={authenticator}
                        redirect={"/login"}
                    />
                </main>
            </div>
        </div>
    </Router>
)

ReactDOM.render(<App/>, document.getElementById('root'))

// Supporting hot module reloading (HMR)
if (module.hot) module.hot.accept();