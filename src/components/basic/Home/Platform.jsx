import React from 'react'

import 'styles/components/basic/Home/Platform.css'

class Platform extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        let output = [];
        let hasPC = false, hasConsole = false, hasMobile = false;
        this.props.platforms.forEach((platform) => {
            switch(platform) {
                case "Playstation":
                case "Xbox":
                    if(!hasConsole)
                        output.push(<i key={platform} className="fa fa-tv Platform" aria-hidden="true"></i>);
                    hasConsole = true;
                break;
                case "PC":
                case "Mac":
                    if(!hasPC)
                        output.push(<i key={platform} className="fa fa-laptop Platform" aria-hidden="true"></i>);
                    hasPC = true;
                break;
                default:
                    if(!hasMobile)
                        output.push(<i key={platform} className="fa fa-mobile Platform" aria-hidden="true"></i>);
                    hasMobile = true;
                break;
            }
        });

        return (<div className="Card-platforms">{output}</div>)
    }
}

export default Platform