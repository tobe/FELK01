import React from 'react'
import classnames from 'classnames'

import 'styles/components/basic/Game/ImageList.css'

class ImageList extends React.Component {
    state = {
        selectedImage: ''
    }

    constructor() {
        super();

        this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    }

    componentDidMount() {
        this.setState({selectedImage: this.props.images[0]});
    }

    handleButtonClick(direction) {
        // First let's find the current image index
        let currentIndex = this.props.images.findIndex(el => el == this.state.selectedImage);
        console.log('Current index: ' + currentIndex);

        let newIndex = 0;

        switch(direction) {
            case 'right':
                newIndex = (currentIndex + 1 > this.props.images.length - 1) ? 0 : currentIndex + 1;
            break;
            case 'left':
                newIndex = (currentIndex - 1 < 0) ? this.props.images.length - 1 : currentIndex - 1;
            break;
        }

        this.setState({selectedImage: this.props.images[newIndex]});
    }

    handleThumbnailClick(e) {
        // Custom attributes aren't supported in React15, so we have to do this dirty trick.
        // I mean, probably there exist a better solution. Alas, this is what I had come up with.
        // Whatever...
        // see: https://stackoverflow.com/questions/31273093/how-to-add-custom-html-attributes-in-jsx
        console.log(e.target.id);
        this.setState({selectedImage: e.target.id});
    }

    render() {
        let mainImage = this.state.selectedImage ? this.state.selectedImage : this.props.images[0];

        return (
            <div className="ImageList">
                <div className="ImageList__mainImage" style={{background: 'url(' + mainImage + ') center / cover'}}>
                    <i 
                        className="fa fa-chevron-circle-left ImageList__mainImage-button ImageList__mainImage-button--left"
                        aria-hidden="true"
                        onClick={() => this.handleButtonClick('left')}>
                    </i>
                    <i className="fa fa-chevron-circle-right ImageList__mainImage-button ImageList__mainImage-button--right"
                       aria-hidden="true"
                       onClick={() => this.handleButtonClick('right')}>
                    </i>
                </div>
                <div className="ImageList__images">
                    {
                        this.props.images.map(image => {
                            const imageClasses = classnames({
                                'ImageList__image' : 1,
                                'ImageList__image--selected': mainImage == image
                            });
                            return (
                                <div id={image}
                                     key={image}
                                     style={{background: 'url(' + image + ') center / cover'}}
                                     className={imageClasses}
                                     onClick={this.handleThumbnailClick}>
                                </div>
                            )  
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ImageList