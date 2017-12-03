import React from 'react'

import 'styles/components/basic/Home/Pill.css'

class Pill extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        let output = [];
        this.props.genres.forEach((genre) => {
            output.push(
                <span key={genre} className="Pill">
                    {genre}
                </span>
            )
        });

        return (<div className="Card-props">{output}</div>)
    }
}

export default Pill