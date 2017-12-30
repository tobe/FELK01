import React from 'react'
import {GenerateEmote} from 'helpers.jsx'

import 'styles/components/basic/Home/Error.css'

class Error extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="Error">
                {this.props.text}&nbsp;{ GenerateEmote()}
            </div>
        )
    }
}

export default Error