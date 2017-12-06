import React from 'react'
import classnames from 'classnames'

import 'styles/components/basic/Game/ImageList.css'

class ImageList extends React.Component {
    state = {
        selectedImage: ''
    }

    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
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
                    <i className="fa fa-chevron-circle-left ImageList__mainImage-button ImageList__mainImage-button--left"  aria-hidden="true"></i>
                    <i className="fa fa-chevron-circle-right ImageList__mainImage-button ImageList__mainImage-button--right" aria-hidden="true"></i>
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
                                     onClick={this.handleClick}>
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