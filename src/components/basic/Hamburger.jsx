import React from 'react'

import 'styles/components/basic/Hamburger.css'

const Hamburger = ({onClick}) => (
        <div className="Hamburger"
            onClick={onClick}
        > 
            <div className="Hamburger__icon">
                <span className="Hamburger__span"/>
            </div>
        </div>
)

export default Hamburger