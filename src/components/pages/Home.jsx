import React from 'react'

import Lorem from 'react-lorem-component'
import Popup from 'components/basic/Popup.jsx'

class Home extends React.Component {
    state = {
        showPopup: false
    }

    constructor() {
        super();

        this.handler = this.handler.bind(this);
        this.testing = this.testing.bind(this);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
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

    testing() {
        return this.state;
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


            {
                this.state.showPopup ? 
                    <Popup
                    handler = {this.handler}
                    testing = {this.testing}
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