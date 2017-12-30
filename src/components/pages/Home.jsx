import React from 'react'

import Popup from 'components/basic/Popup.jsx'
import GameFilter from 'components/basic/Home/GameFilter.jsx'
import Checkbox from 'components/basic/Home/Checkbox.jsx'
import Sort from 'components/basic/Home/Sort.jsx'
import {arrayContains, firstLetterUppercase} from 'helpers.jsx'

import 'styles/components/pages/home.css'

const data = require('~/data/games.json');
const checkboxes = require('~/data/checkboxes.json');

class Home extends React.Component {
    state = {
        showPopup: false, // Show the filters popup in mobile
        showAll: true, // Show all items at the beginning
        showError: false, // Show error if nothing matches the criteria
        items: [] // Here we will store the filtered games
    }

    constructor() {
        super();

        // This is needed because generateCheckboxes calls the checkboxes variable.
        // It needs to be bound in order for the call to succeed -- otherwise we get undefined context.
        this.generateCheckboxes = this.generateCheckboxes.bind(this);

        // Since this method will be called from the child compoentn, we need to bind it to this (parent)
        this.updateGamesFromChild = this.updateGamesFromChild.bind(this);

        // Had to add this because this function is called from Checkbox.jsx and we have to tell react
        // to act upon this exact class and not Checkbox!
        this.updateCheckbox = this.updateCheckbox.bind(this);

        // Set our all initial filters
        for(var checkbox in checkboxes) {
            checkboxes[checkbox].forEach((key, value) => {
                this.state[key] = false;
            });
        }
    }

    /**
     * Sets the items (games) to all available once the component mounts.
     */
    componentWillMount() {
        /* TODO: Should actually call the method from child component (Sort) and sort in updateGameList
        *every time* depending on the chosen <option> in the Sort's render. Why? Because, each time
        A list of games is updated, it will be *ensured* it's sorted, even if we, e.g: swap checkboxes, search
        swap checkboxes back and delete. But, since this is a PoC, I believe it's good as is. */
        data.sort((a, b) => {
            return (a.players < b.players) ? 1 : ((b.players < a.players) ? -1 : 0);
        });

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
     * Updates the list of games based on filters.
     */
    updateGameList() {
        // Let's start of with an empty list
        let updatedList = data;

        // Remove any errors
        this.setState({showError: false});

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
                        if(arrayContains(criteria, game[checkbox])) {
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

        // We have something checked, but nothing in the array, show an error.
        if(updatedList.length == 0 && anyChecked)
            this.setState({showError: true});

        // Set the state -> this will cause it to re-render
        this.setState({items: updatedList, showAll: false});
        console.log(updatedList);
    }

    /**
     * Updates the checkbox value from the parent div
     * @param {*string} checkbox The checkbox whose value needs to be updated
     */
    updateCheckbox(checkbox) {
        let value = !this.state[checkbox];

        this.setState({
            [checkbox]: value,
        }, this.updateGameList); // Second parameter here gets called AFTER the state has been updated
        // These things tend to happen really fast and this took me a while to debug :(
        // (Function would get hit but the state wouldn't update as fast! React is pretty fast.)
    }

    /**
     * Updates the currently available games a child component (Sort, GameFilter)
     * @param {*array} newList A list of new games to display
     */
    updateGamesFromChild(newList) {
        this.setState({items: newList});
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
                        <h3>{firstLetterUppercase(item)}</h3>
                            {
                                // .map needs to return... ~1.5h wasted on this.
                                data[item].map((key, value) => {
                                    return (
                                        <Checkbox key = {key}
                                                  _key = {key}
                                                  updateCheckbox = {this.updateCheckbox}
                                                  state = {this.state} />
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

                    <Sort items = {this.state.items}
                          updateGames = {this.updateGamesFromChild}
                    />

                    <div className="Home__filter Home__filter--desktop">
                        {this.generateCheckboxes()}
                    </div>
                </aside>
                <main className="main">
                    <GameFilter state = {this.state}
                                updatedList = {this.state.items}
                                showAll = {this.state.showAll}
                                updateGames = {this.updateGamesFromChild}
                                initialList = {data}
                    />
                </main>

            {
                this.state.showPopup ? 
                    <Popup
                        /* Since generateCheckboxes is bound to Home, it will act upon it when called from
                        Popup. And modify Home's state. However, this completely contradicts any logic
                        from... sane programming languages. Nonetheless, this is a godsend here. */
                        contents = {this.generateCheckboxes()}
                        /* We could have ommited using .bind here if we had used it
                        up there in the constructor, e.g. this.togglePopup = this.togglePopup.bind(this)
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