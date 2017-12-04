import React from 'react'

import 'styles/components/basic/Home/Error.css'

class Error extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        return (
            <div className="Error">
                {this.props.text}
            </div>
        )
    }
}

export default Error