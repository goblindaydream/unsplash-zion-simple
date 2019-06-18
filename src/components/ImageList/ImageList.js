import React from 'react';
import { ImageCard } from './Card';

import './style.css';

const ImageList = (props) => {
    const { images = [], searched } = props

    const searchedImages = images.map(img => {
        return <ImageCard key={img.id} image={img} />
    });

    return (
        <div className="row">
            {images.length > 0 ? searchedImages : ( searched ? (
                    <div className="alert alert-warning" role="alert">
                        No images for the user!
                    </div>
                ) : ''
            ) }
        </div>
    )
}

export default ImageList;