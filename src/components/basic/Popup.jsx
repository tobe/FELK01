import React from 'react'

import Lorem from 'react-lorem-component'

import 'styles/components/basic/Popup.css'

class Popup extends React.Component {
    render() {
        console.log(this.props.testing);

        return (
            <div className="popup">
                <div className="popup_inner">
                <button onClick={this.props.closePopup}>close me</button>
                <Lorem count="3"/>
                </div>
            </div>
        );
    }
}

export default Popup