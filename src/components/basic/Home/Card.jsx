import React from 'react'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'

import Badge from 'components/basic/Home/Badge.jsx'
import Pill from 'components/basic/Home/Pill.jsx'
import Platform from 'components/basic/Home/Platform.jsx'

import 'styles/components/basic/Home/Card.css'

class Card extends React.Component {
    state = {
        startTransition: false
    }

    constructor() {
        super();
        
        this.startTransition = this.startTransition.bind(this);
    }

    componentDidMount() {
        setTimeout(this.startTransition, 10);
    }

    startTransition() {
        this.setState({startTransition: true});
    }

    redirectToGame(id) {
        this.props.history.push({pathname: '/game/' + id});
    }

    render() {
        let cardClass = classnames({
            'Card': 1,
            'transition--start': 1,
            'Card--full': this.props.full,
            'transition--end': this.state.startTransition
        })
        let headingClass = classnames({
            'Card-heading': 1,
            'Card-heading--full': this.props.full
        })

        return (
            <div className={cardClass} onClick={() => this.redirectToGame(this.props.game.id) }>
                <div className={headingClass} style={{background: 'url(/assets/' + this.props.game.id + '.jpg) center / cover'}}>
                    <div className="Card-price">
                        {this.props.game.price}€
                    </div>
                    <Platform platforms = {this.props.game.platforms} />
                </div>
                <div>
                    <div className="Card-body">
                        <h2>{this.props.game.name}</h2>
                    </div>
                    <div className="Card-specs">
                        <Pill genres = {this.props.game.genres} />
                        <Badge resellers = {this.props.game.resellers} />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Card)