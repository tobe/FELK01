import React from 'react'

class Checkbox extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        return(
            <div key={this.props._key}
                 className="Home__checkbox-wrapper"
                 onClick={(e) => { this.props.updateCheckbox(this.props._key); } }>

                    <div style={{marginLeft: '.5rem'}} className="md-checkbox">
                        <input readOnly type="checkbox" checked={this.props.state[this.props._key]} />
                        <label>{this.props._key}</label>
                    </div>

            </div>
        )
    }
}

export default Checkbox