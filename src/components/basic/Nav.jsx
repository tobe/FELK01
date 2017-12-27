import React, { Component } from 'react'
import classnames from 'classnames'
import 'styles/components/basic/Nav.css'
import { NavLink } from 'react-router-dom'

import Hamburger from 'components/basic/Hamburger.jsx'
import LogoutButton from 'components/basic/LogoutButton.jsx'

class Nav extends Component {    
    constructor(props) {
        super(props)
    }

    state = {
        isMenuOpen: false
    }

    handleNavClick = () => {
        this.setState({isMenuOpen: !this.state.isMenuOpen})
    }

    render() {

        const navContainerClassName = classnames({
            'Nav__container': !this.props.mobile,
            'Nav__container--mobile': this.props.mobile 
        })

        const linkWrapperClassName = classnames({
            'Nav__link-wrapper': !this.props.mobile,
            'Nav__link-wrapper--mobile': this.props.mobile,
            'Nav__link-wrapper--open': this.state.isMenuOpen && this.props.mobile
        })

        return (
            <nav className={navContainerClassName}>        
                <Hamburger onClick={this.handleNavClick}/>
        
                <div className={linkWrapperClassName}>
                    {
                        this.props.links.map((link, index) => (
                                <NavLink                     
                                    key={index}
                                    className={'Nav__link'}
                                    activeClassName={'Nav--active'}
                                    to={`/${link.toLowerCase()}`}
                                    onClick={this.handleNavClick}>
                                    {link}
                                </NavLink>
                        ))
                    }

                    <LogoutButton onClick={this.handleNavClick} className={'Nav__link'} {...this.props} />

                    {
                        !this.props.authenticator.authenticated ?
                            <NavLink
                                className={'Nav__link'}
                                activeClassName={'Nav--active'}
                                to='/register'
                                onClick={this.handleNavClick}>
                                Register
                            </NavLink>
                        :
                            null
                    }
                </div>
            </nav>            
        ) 
    }
}

export default Nav