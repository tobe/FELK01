import React from 'react'

import 'styles/components/basic/Home/Error.css'

class Error extends React.Component {
    constructor() {
        super();

    }

    getRandomEmote() {
        const emotes = [
            '¯\\_(ツ)_/¯',
            '(·.·)',
            '(≥o≤)',
            '(·_·)',
            '(;-;)',
            '(^_^)b',
            '(>_<)',
            '\\(^Д^)/',
            '(˚Δ˚)b',
            '\\(o_o)/',
            '(o^^)o'
        ];

        return emotes[Math.floor(Math.random() * emotes.length)];
    }

    render() {
        return (
            <div className="Error">
                {this.props.text}&nbsp;{this.getRandomEmote()}
            </div>
        )
    }
}

export default Error