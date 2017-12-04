import React from 'react'

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
        let mainImage = this.state.selectedImage ? this.state.selectedImage : this.props.images[0];

        return (
            <div className="ImageList">
                <div className="ImageList__mainImage">
                    
                </div>
                <div className="ImageList__images">
                    {
                        this.props.images.forEach(image => {
                            const imageClasses = classnames({
                                'ImageList__image' : 1,
                                'ImageList__image--selected': mainImage == image
                            });
                            return (
                                <img key={image} className={imageClasses} onClick={this.handleClick} />
                            )  
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ImageList