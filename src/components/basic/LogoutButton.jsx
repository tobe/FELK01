import React from 'react'
import { withRouter } from 'react-router-dom'

const LogoutButton = props => (
    props.authenticator.authenticated ? (
        <div                         
            className={props.className}
            onClick={() => {
                props.authenticator.logout()                                
                props.history.push('/')
            }}
        >
            Logout
        </div>
    ) : (
        null
    )    
)

export default withRouter(LogoutButton)
