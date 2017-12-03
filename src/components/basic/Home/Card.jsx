import React from 'react'
import classnames from 'classnames'

import Badge from 'components/basic/Home/Badge.jsx'
import Pill from 'components/basic/Home/Pill.jsx'

import 'styles/components/basic/Home/Card.css'

class Card extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        let cardClass = classnames({
            'Card': 1,
            'Card--full': this.props.full,
        })
        let headingClass = classnames({
            'Card-heading': 1,
            'Card-heading--full': this.props.full
        })

        return (
            <div className={cardClass}>
                <div className={headingClass} style={{background: 'url(/assets/' + this.props.game.id + '.jpg) center / cover'}}>
                    <div className="Card-price">
                        {this.props.game.price}€
                    </div>
                </div>
                <div className="Card-body">
                    <h2>{this.props.game.name}</h2>
                </div>
                <div className="Card-specs">
                    <Pill genres = {this.props.game.genres} />
                    <Badge resellers = {this.props.game.resellers} />
                </div>
            </div>
        )
    }
}

export default Card