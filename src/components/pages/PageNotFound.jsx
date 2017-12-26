import React from 'react'
import classnames from 'classnames'
import {GenerateEmote} from 'helpers.jsx'

import 'styles/components/pages/PageNotFound.css'

class PageNotFound extends React.Component {
    render() {
        return (
            <div className="PageNotFound__container">
                <h1>Oops! { GenerateEmote() }</h1>
                <p>The page you were looking for has not been found!</p>
                <br/>
                <p>Here's some of the things you can do:</p>
                    <ul>
                        <li>Check yoself out</li>
                    </ul>
            </div>
        );
    }
}

export default PageNotFound