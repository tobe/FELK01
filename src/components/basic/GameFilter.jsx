import React from 'react'
import classnames from 'classnames'
const data = require('../../data/games.json');
const checkboxes = require('../../data/checkboxes.json');

import 'styles/components/basic/GameFilter.css'

class GameFilter extends React.Component {
    checkboxList = [];

    constructor() {
        super();

        /* First we concatenate all the checkboxes into a single list from the
           Object stored in the file. Ideally, this would be returned from an AJAX request.
           This is so we can optimize the for loop down below.
        */
        for(var checkbox in checkboxes) {
            checkboxes[checkbox].forEach((k, v) => {
                this.checkboxList.push(k);
            });
        }

        // We start with the list of all games.
        this.updatedList = data;

        //this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    arrayContains(needle, haystack) {
        return (haystack.indexOf(needle) > -1);
    }

    componentWillMount() {
        this.setState({items: data});
    }

    /**
     * Gets triggered each time the parent state gets updated.
     * The React lifecycle.
     */
    /*componentDidUpdate() {
        this.updatedList = data;
        this.updatedList = this.updatedList.filter((game) => {
            let satisfiedCriteria = false;
            for(var checkbox in checkboxes) {
                checkboxes[checkbox].forEach((criteria) => {
                    //console.log(checkbox + ": " + criteria);
                    if(this.props.state[criteria] == true) {
                        //console.log(criteria + ' is checked!');
                        // Check if game has in array
                        if(this.arrayContains(criteria, game[checkbox])) {
                            console.log(game.name + " has " + criteria);
                            satisfiedCriteria = true;
                        }
                    }
                });
            }
            return satisfiedCriteria;
        });

        // Check if the list is empty -> nothing has been selected -> show all :)
        if(this.updatedList.length == 0)
            this.updatedList = data;

        console.log("NEW UPDATED LIST:");
        console.log(this.updatedList);
        this.setState({items: this.updatedList});
    }*/

    render() {
        return (
            <div>
                <span className="testing">Hello from GameFilter</span>
                {
                    this.props.updatedList.map((item) => {
                        return <li key={item.name}>{item.name}</li>
                    })
                }
            </div>
        );
    }
}

export default GameFilter