import React from 'react'
import Lorem from 'react-lorem-component'

import 'styles/components/basic/LoginForm.css'

const Private = () => (
    <div>
        <h2>Private</h2>
        <br/>
        <Lorem mode="list" count="2"/>
        <p>
            Winning lottery numbers:         
            <span className="alert">
                {[1, 2, 3, 4, 5, 6, 7].map((num, index) =>
                    " " + 
                    Math.floor((Math.random() * 10) + 1) + 
                    (index < 6 ? " - " : "")
                )}
            </span>
        </p>
    </div>
)

export default Private