import React from 'react';

import './style.css';

const ImageCard = (props) => {
    return (
        <div className="col-md-3 col-sm-6 my-3">
            <div className="embed-responsive embed-responsive-1by1">
                <img
                    src={props.image.urls.regular}
                    alt={props.image.alt_description}
                    className="card-img embed-responsive-item" />
            </div>                    
        </div>
    )
}

export default ImageCard;
