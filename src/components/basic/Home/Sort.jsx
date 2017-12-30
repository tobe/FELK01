import React from 'react'

import 'styles/components/basic/Home/Sort.css'

// Emulating a C-like enum
const SORTMODE = {
    ASCENDING: 0,
    DESCENDING: 1
};

class Sort extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        
    }
    
    /**
     * Sorts an array of objects in an ascending or descending way, depending on the key.
     * @param {*string} key The key of the object to sort by
     * @param {*} mode Sorting mode, see SORTMODE
     */
    sort(key, mode) {
        return function(a, b) {
            switch(mode) {
                case SORTMODE.ASCENDING:
                    console.log(a[key], b[key]);
                    return (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
                break;
                case SORTMODE.DESCENDING:
                    return (a[key] < b[key]) ? 1 : ((b[key] < a[key]) ? -1 : 0);
                break;
            }
        }
    }

    handleChange(event) {
        // I wish Javascript had proper enums like C..

        // We need to make a copy here, since permuting the state out of setState is a big nono.
        let gamesCopy = this.props.items.slice(0);

        switch(parseInt(event.target.value)) {
            case 1: // # of players, descending
                gamesCopy.sort(this.sort("players", SORTMODE.DESCENDING));
            break;
            case 2: // # of players, ascending
                gamesCopy.sort(this.sort("players", SORTMODE.ASCENDING));
            break;
            case 3: // Price, descending
                gamesCopy.sort(this.sort("price", SORTMODE.DESCENDING));
            break;
            case 4: // Price, ascending
                gamesCopy.sort(this.sort("price", SORTMODE.ASCENDING));
            break;
            case 5: // Name, descending
                gamesCopy.sort(this.sort("name", SORTMODE.DESCENDING));
            break;
            case 6: // Name, ascending
                gamesCopy.sort(this.sort("name", SORTMODE.ASCENDING));
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