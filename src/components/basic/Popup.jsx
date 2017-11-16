import React from 'react'

import 'styles/components/basic/Popup.css'

class Popup extends React.Component {
    render() {
        return (
            <div className="popup">
                <div className="popup_inner">
                <button onClick={this.props.closePopup}>close me</button>
                {this.props.testing}

                
                </div>
            </div>
        );
    }
}

export default Popup