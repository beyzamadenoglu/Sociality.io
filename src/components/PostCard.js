import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faThumbsUp, faMessage, faEye } from "@fortawesome/free-regular-svg-icons"
import { faShareNodes, faTrash } from "@fortawesome/free-solid-svg-icons"
import DefaultImage from '../contants/Images/no-post-image.png';
import ReactImageFallback from "react-image-fallback";

function PostCard(data) {
  return (
    <div className="card-item-container">
      <div className="vertical-badge">
        <FontAwesomeIcon icon={faFacebookF} />
      </div>
      <div className="card-item-content-container">
        <div className="card-date">
          <FontAwesomeIcon icon={faTrash} />

        </div>


        <div className="card-header">

        </div>
        <div className="card-actions">

        </div>

        <div className="card-image">

          <ReactImageFallback src={data.data.entry.image[0]} alt="ok"
            fallbackImage={DefaultImage}
            initialImage={DefaultImage} />
        </div>
        <div className="card-interactions">


          <span>
            <FontAwesomeIcon icon={faThumbsUp} />
            {10 + Math.floor((Math.random() * (90)))}
          </span>

          <span>
            <FontAwesomeIcon icon={faMessage} />
            {10 + Math.floor((Math.random() * (90)))}
          </span>

          <span>
            <FontAwesomeIcon icon={faShareNodes} />
            {10 + Math.floor((Math.random() * (90)))}
          </span>

          <span>
            <FontAwesomeIcon icon={faEye} />
            {10 + Math.floor((Math.random() * (90)))}
          </span>

        </div>
      </div>
    </div>
  );
}

export default PostCard;
