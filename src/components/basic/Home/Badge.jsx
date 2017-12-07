import React from 'react'
import classnames from 'classnames'

import 'styles/components/basic/Home/Badge.css'

class Badge extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        let output = [];
        this.props.resellers.forEach((reseller) => {
            if(reseller == "G2A") {
                output.push(
                    <span key={reseller} className="Badge Badge--g2a">
                        G2A
                    </span>
                )
                return;
            }

            let badgeClass = classnames('Badge', 'Badge--' + reseller.toLowerCase());

            let iconClass = classnames({
                'fa': 1,
                'fa-opera': reseller === 'Origin',
                ['fa-' + reseller.toLowerCase()]: reseller !== 'Origin'
            });

            output.push(
                <span key={reseller} className={badgeClass}>
                    <i className={iconClass} aria-hidden="true"></i>
                </span>
            )
        });

        return (<div className="Card-props">{output}</div>)
    }
}

export default Badge