import React from 'react'

import 'styles/components/basic/Home/Sort.css'

class Sort extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // I wish Javascript had proper enums like C..

        // We need to make a copy here, since permuting the state out of setState is a big nono.
        let gamesCopy = this.props.items.slice(0);

        switch(parseInt(event.target.value)) {
            case 1: // # of players, descending
                gamesCopy.sort((a, b) => {
                    return (a.players < b.players) ? 1 : ((b.players < a.players) ? -1 : 0);
                });
            break;
            case 2: // # of players, ascending
                gamesCopy.sort((a, b) => {
                    return (a.players > b.players) ? 1 : ((b.players > a.players) ? -1 : 0);
                });
            break;
            case 3: // Price, descending
                gamesCopy.sort((a, b) => {
                    return (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0);
                });
            break;
            case 4: // Price, ascending
                gamesCopy.sort((a, b) => {
                    return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);
                });
            break;
            case 5: // Name, descending
                gamesCopy.sort((a, b) => {
                    return (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0);
                });
            break;
            case 6: // Name, ascending
                gamesCopy.sort((a, b) => {
                    return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
                });
            break;
        }

        this.props.updateGames(gamesCopy);
    }

    render() {
        return (
            <div className="Sort__group">
                <label>Sort by</label>
                <h3>Sort by</h3>
                <select className="Sort__select" onChange={this.handleChange}>
                    <option value="1">Players &darr;</option>
                    <option value="2">Players &uarr;</option>
                    <option value="3">Price &darr;</option>
                    <option value="4">Price &uarr;</option>
                    <option value="5">Name &darr;</option>
                    <option value="6">Name &uarr;</option>
                </select>
            </div>
        )
    }
}

export default Sort