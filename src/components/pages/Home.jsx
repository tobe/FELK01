import React from 'react'

import Popup from 'components/basic/Popup.jsx'

import 'styles/components/pages/home.css'

class Home extends React.Component {
    state = {
        showPopup: false, // Show the filters popup in mobile
        genres: [],
        resellers: [],
        platforms: []
    }

    checkboxes = {
        genres: ['Action', 'Adventure', 'Arcade', 'MMO', 'MoBA', 'FPS', 'RTS'],
        resellers: ['Steam', 'Origin', 'G2A', 'Google', 'Apple'],
        platforms: ['PC', 'Mac', 'Android', 'iOS', 'Playstation', 'Xbox']
    }

    constructor() {
        super();
        this.handler = this.handler.bind(this);

        // This is needed because generateCheckboxes calls the checkboxes variable.
        // It needs to be bound in order for the call to succeed -- otherwise we get undefined context.
        this.generateCheckboxes = this.generateCheckboxes.bind(this);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    generateCheckboxes() {     
        let data = this.checkboxes; // Object.keys cannot act directly upon an object   

        return (
            <div>
                {
                    Object.keys(data).map((item, i) => (
                        <div key={i}>
                        <h3>{item}</h3>
                            {
                                // .map needs to return... ~1.5h wasted on this.
                                data[item].map((k, v) => {
                                    return (<div key={k}>gg</div>)
                                })
                            }
                        </div>
                    ))
                }
            </div>
        )
    }

    /**
     * Updates the component's state. We need this in order to pass it around
     * to child components.
     * @param {*} e 
     */
    handler(e) {
        e.preventDefault();
        this.setState(e);
    }

    render() {
        return(
            <div className="maincontainer">
                <aside>
                    <button onClick={this.togglePopup.bind(this)}>show popup</button>
                </aside>
                <main className="main">
                    <div className="my_flex">A</div>
                    <div className="my_flex">Main</div>
                    <div className="my_flex">C</div>
                </main>

            {this.generateCheckboxes()}

            {
                this.state.showPopup ? 
                    <Popup
                    handler = {this.handler}
                    testing = {this.state}
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

/*const Home = () => (
    <div className="maincontainer">
        <aside>
            Aside text
        </aside>
        <main className="main">
            <div className="my_flex">A</div>
            <div className="my_flex">Main</div>
            <div className="my_flex">C</div>
        </main>
    </div>
)*/

export default Home