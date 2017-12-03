import React from 'react'

import 'styles/components/basic/Home/Badge.css'

class Badge extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        let output = [];
        this.props.resellers.forEach((reseller) => {
            switch(reseller) {
                case "Steam":
                    output.push(
                        <span className="Badge Badge--steam">
                            <i className="fa fa-steam" aria-hidden="true"></i>&nbsp;Steam
                        </span>
                    )
                break;
                case "Origin":
                    output.push(
                        <span className="Badge Badge--origin">
                            <i className="fa fa-opera" aria-hidden="true"></i>&nbsp;Origin
                        </span>
                    )
                break;
                case "Google":
                    output.push(
                        <span className="Badge Badge--google">
                            <i className="fa fa-google" aria-hidden="true"></i>&nbsp;Google
                        </span>
                    )
                break;
                case "Apple":
                    output.push(
                        <span className="Badge Badge--apple">
                            <i className="fa fa-apple" aria-hidden="true"></i>&nbsp;Apple
                        </span>
                    )
                break;
                case "G2A":
                    output.push(
                        <span className="Badge Badge--g2a">
                            G2A
                        </span>
                    )
                break;
            }
        });

        return (<div className="Card-props">{output}</div>)
    }
}

export default Badge