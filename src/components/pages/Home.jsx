import React from 'react'

import Popup from 'components/basic/Popup.jsx'
import GameFilter from 'components/basic/GameFilter.jsx'
const checkboxes = require('../../data/checkboxes.json');

import 'styles/components/pages/home.css'

class Home extends React.Component {
    state = {
        showPopup: false // Show the filters popup in mobile
    }

    /*checkboxes = {
        genres: ['Action', 'Adventure', 'Arcade', 'MMO', 'MoBA', 'FPS', 'RTS'],
        resellers: ['Steam', 'Origin', 'G2A', 'Google', 'Apple'],
        platforms: ['PC', 'Mac', 'Android', 'iOS', 'Playstation', 'Xbox']
    }*/

    constructor() {
        super();
        // Checkboxes from the file
        this.checkboxes = checkboxes;

        // This is needed because generateCheckboxes calls the checkboxes variable.
        // It needs to be bound in order for the call to succeed -- otherwise we get undefined context.
        this.generateCheckboxes = this.generateCheckboxes.bind(this);
        this.updateCheckbox = this.updateCheckbox.bind(this);

        // Set our all initial filters
        for(var checkbox in this.checkboxes) {
            this.checkboxes[checkbox].forEach((k, v) => {
                this.state[k] = false;
            });
        }
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    firstLetterUppercase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    updateCheckboxFromParent(checkbox) {
        let value = !this.state[checkbox];
        this.setState({
            [checkbox]: value,
        });
    }

    updateCheckbox(event) {
        console.log("UPDATE CHECKBOX");
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const id = target.id;

        this.setState({
            [id]: value
        });
    }

    generateCheckboxes() {     
        let data = this.checkboxes; // Object.keys cannot act directly upon an object   

        return (
            <div className="Home__filter-wrapper">
                {
                    Object.keys(data).map((item, i) => (
                        <div key={i}>
                        <h3>{this.firstLetterUppercase(item)}</h3>
                            {
                                // .map needs to return... ~1.5h wasted on this.
                                data[item].map((k, v) => {
                                    return (
                                        <div key={k} className="Home__checkbox-wrapper" onClick={(e) => {this.updateCheckboxFromParent(k)}}>
                                            <div style={{marginLeft: '.5rem'}} className="md-checkbox">
                                                <input readOnly ref={k} id={k} type="checkbox" checked={this.state[k]} /*onChange={this.updateCheckbox}*/ />
                                                <label>{k}</label>
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
                    <GameFilter state = {this.state} />
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