import React from 'react'
import classnames from 'classnames'

import Lorem from 'react-lorem-component'

import 'styles/components/basic/Popup.css'

class Popup extends React.Component {
    render() {
        const buttonClassNames = classnames('fa', 'fa-window-close', 'Popup__close')

        return (
            <div className="Popup__container">
                <div className="Popup__container--inner">
                <i onClick={this.props.closePopup} className={buttonClassNames} aria-hidden="true"></i>
                {this.props.contents}
                </div>
            </div>
        );
    }
}

export default Popup