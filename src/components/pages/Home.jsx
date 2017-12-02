import React from 'react'

import Popup from 'components/basic/Popup.jsx'
import GameFilter from 'components/basic/GameFilter.jsx'
const data = require('../../data/games.json');
const checkboxes = require('../../data/checkboxes.json');

import 'styles/components/pages/home.css'

class Home extends React.Component {
    state = {
        showPopup: false, // Show the filters popup in mobile
        showAll: true, // Show all items at the beginning
        items: [] // Here we will store the filtered games
    }

    constructor() {
        super();

        // This is needed because generateCheckboxes calls the checkboxes variable.
        // It needs to be bound in order for the call to succeed -- otherwise we get undefined context.
        this.generateCheckboxes = this.generateCheckboxes.bind(this);

        // Set our all initial filters
        for(var checkbox in checkboxes) {
            checkboxes[checkbox].forEach((k, v) => {
                this.state[k] = false;
            });
        }
    }

    /**
     * Sets the items (games) to all available once the component mounts.
     */
    componentWillMount() {
        this.setState({items: data});
    }

    /**
     * Toggles the popup.
     */
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    /**
     * Looks for needle in the haystack.
     * @param {*sting} needle The needle
     * @param {*array} haystack The haystack
     */
    arrayContains(needle, haystack) {
        return (haystack.indexOf(needle) > -1);
    }

    /**
     * Makes the first letter of the string uppercase.
     * @param {*string} string The string to uppercase the first letter of
     */
    firstLetterUppercase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /**
     * Updates the list of games based on filters.
     */
    updateGameList() {
        // Let's start of with an empty list
        let updatedList = data;
        let anyChecked = false; // Keep track if any checkboxes are checked
        updatedList = updatedList.filter((game) => {
            let satisfiedCriteria = false;
            // Loop through all checkboxes and their values
            for(var checkbox in checkboxes) {
                checkboxes[checkbox].forEach((criteria) => {
                    // If the checkbox has been checked...
                    if(this.state[criteria] == true) {
                        // At least 1 checkbox has been checked
                        anyChecked = true;
                        // Check if game has said checkbox in its array
                        if(this.arrayContains(criteria, game[checkbox])) {
                            //console.log(game.name + " has " + criteria);
                            satisfiedCriteria = true;
                        }
                    }
                });
            }
            // Here we return true or false, since we iter through multiple categories
            return satisfiedCriteria;
        });

        // Check if the list is empty and nothing has been checked -> show all :)
        if(updatedList.length == 0 && !anyChecked) {
            updatedList = data;
            this.setState({showAll: true});
        }

        // Set the state -> this will cause it to re-render
        this.setState({items: updatedList, showAll: false});
        console.log(updatedList);
    }

    /**
     * Updates the checkbox value from the parent div
     * @param {*string} checkbox The checkbox whose value needs to be updated
     */
    updateCheckboxFromParent(checkbox) {
        let value = !this.state[checkbox];
        this.setState({
            [checkbox]: value,
        }, this.updateGameList); // Second parameter here gets called AFTER the state has been updated
        // These things tend to happen really fast and this took me a while to debug :(
        // (Function would get hit but the state wouldn't update as fast! React is pretty fast.)
    }

    /**
     * Generates checkboxes (HTML)
     */
    generateCheckboxes() {     
        let data = checkboxes; // Object.keys cannot act directly upon an object   

        return (
            <div className="Home__filter-wrapper">
                {
                    Object.keys(data).map((item, i) => (
                        <div key={i}>
                        <h3>{this.firstLetterUppercase(item)}</h3>
                            {
                                // .map needs to return... ~1.5h wasted on this.
                                data[item].map((key, value) => {
                                    return (
                                        <div key={key} className="Home__checkbox-wrapper" onClick={(e) => {this.updateCheckboxFromParent(key)}}>
                                            <div style={{marginLeft: '.5rem'}} className="md-checkbox">
                                                <input readOnly ref={key} id={key} type="checkbox" checked={this.state[key]} />
                                                <label>{key}</label>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </div>
        )
    }

    render() {
        return(
            <div className="maincontainer">
                <aside>
                    <button className="Home__filter Home__filter--mobile" onClick={this.togglePopup.bind(this)}>
                        <i className="fa fa-filter" aria-hidden="true"></i>Filters
                    </button>
                    <div className="Home__filter Home__filter--desktop">
                        {this.generateCheckboxes()}
                    </div>
                </aside>
                <main className="main">
                    <GameFilter state = {this.state} updatedList = {this.state.items} showAll = {this.state.showAll} />
                </main>

            {
                this.state.showPopup ? 
                    <Popup
                    /* Since generateCheckboxes is bound to Home, it will act upon it when called from
                    Popup. And modify Home's state. However, this completely contradicts any logic
                    from... sane programming languages. Nonetheless, this is a godsend here. */
                    contents = {this.generateCheckboxes()}
                    /* We could have ommited using .bind here if we had used it
                       up there in the constructor, e.g.: this.togglePopup = this.togglePopup.bind(this)
                       so we'd end up using exclusively this.togglePopup here */
                    closePopup={this.togglePopup.bind(this)}
                    />
                :
                    null
            }
            </div>
        )
    }
}

export default Home