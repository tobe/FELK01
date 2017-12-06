'use strict'

import React,  { Component } from 'react';
import ReactDOM from 'react-dom';

import 'styles/main.css'
import 'font-awesome/css/font-awesome.min.css'

import {
    /*BrowserRouter as Router,*/
    HashRouter as Router,
    Route,
    Redirect
} from 'react-router-dom'  

import Nav from 'components/basic/Nav.jsx'
import Home from 'components/pages/Home.jsx'
import About from 'components/pages/About.jsx'
import News from 'components/pages/News.jsx'
import Game from 'components/pages/Game.jsx'
import Private from 'components/pages/Private.jsx'
import PrivateRoute from 'components/basic/PrivateRoute.jsx'
import LoginForm from 'components/basic/LoginForm.jsx'

const links = ['Home', 'Game', 'News', 'Private']

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
        <div className="container">
            <header className="header">
                <span className="name"><i className="fa fa-gamepad" aria-hidden="true"></i>GameQuest</span>
                <Nav links={links} authenticator={authenticator}/>
                <Nav mobile links={links} authenticator={authenticator}/>
            </header>

            {<Route exact path="/" render={() => <Redirect to='/home'/>} />}
            {<Route path="/home" component={Home} />}
            <Route path="/game" component={Game}/>
            <Route path="/news" component={News}/>
            {/*<Route exact path="/" component={Game} />*/}
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

            <footer className="footer">&copy; 2017 GameQuest</footer>
        </div>
    </Router>
);

ReactDOM.render(<App/>, document.getElementById('root'))

// Supporting hot module reloading (HMR)
if (module.hot) module.hot.accept();