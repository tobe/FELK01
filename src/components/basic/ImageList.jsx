import React from 'react'
import classnames from 'classnames'

import 'styles/components/basic/ImageList.css'

class ImageList extends React.Component {
    state = {
        selectedImage: ''
    }

    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({selectedImage: e.target.src});
    }

    render() {
        console.log(this.props);
        let mainImage = this.state.selectedImage ? this.state.selectedImage : this.props.images[0];

        return (
            <div className="ImageList">
                <div className="ImageList__mainImage" style={{background: 'url(' + mainImage + ') center / cover'}}>
                
                </div>
                <div className="ImageList__images">
                    {
                        this.props.images.map(image => {
                            const imageClasses = classnames({
                                'ImageList__image' : 1,
                                'ImageList__image--selected': mainImage == image
                            });
                            return (
                                <div key={image} style={{background: 'url(' + image + ') center / cover'}} className={imageClasses} onClick={this.handleClick}></div>
                            )  
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ImageList