import React from 'react'
import classnames from 'classnames'
import {GenerateEmote} from 'helpers.jsx'

import 'styles/components/pages/PageNotFound.css'

class PageNotFound extends React.Component {
    render() {
        return (
            <div className="PageNotFound__container">
                <h1>404</h1>
                <p>The page you were looking for has not been found { GenerateEmote() }</p>
            </div>
        );
    }
}

export default PageNotFound