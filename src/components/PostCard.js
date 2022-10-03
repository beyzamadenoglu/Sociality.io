import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import Moment from 'moment';
import DefaultImage from '../contants/Images/no-post-image.png';
import ReactImageFallback from "react-image-fallback";
import { CancelIcon, CommentIcon, DeleteIcon, FavIcon, MoreIcon, ShareIcon, ViewsIcon, LikeIcon } from '../assets/Icons/index';

function PostCard(data) {
  Moment.locale('en');
  var regex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);
  var published_at = data.data.published_at
  published_at = Moment(published_at).format('d MMMM YYYY - HH:mm');


  if (data.data.entry.message.match(regex) != null) {
    let link = data.data.entry.message.match(regex)[0]
    var message = <p>{data.data.entry.message.replace(link, "")} <a href={link}>{link}</a></p>
  } else {
    var message = <p>{data.data.entry.message}</p>
  }

  const account = data.data.account.channel;
  let logo;
  if (account === 'twitter') {
    logo = <FontAwesomeIcon icon={faTwitter} />
  } else if (account === 'facebook') {
    logo = <FontAwesomeIcon icon={faFacebookF} />
  }
  else {
    logo = <FontAwesomeIcon icon={faInstagram} />
  }

  return (
    <div className="card-item-container">  
      <div className="vertical-badge">
      {logo}
      </div>
      <div className="card-item-content-container">
        <div>
          <div className="card-date">
            <p>{published_at}</p>
            <div>
              <CancelIcon />
              <DeleteIcon />
              <MoreIcon />
            </div>
          </div>

          <div className="card-header">
            {message}
          </div>
          <div className="card-actions">

          </div>

          <div className="card-image">

            <ReactImageFallback src={data.data.entry.image[0]} alt="ok"
              fallbackImage={DefaultImage}
              initialImage={DefaultImage} />
          </div>
        </div>
        <div className="card-interactions">


          <span style={{ font: 'Raleway' }}>

            {(data.data.account.channel) === 'twitter' ? <FavIcon /> : <LikeIcon/> }
            <p>{10 + Math.floor((Math.random() * (90)))}</p>
          </span>

          <span>
            <CommentIcon />
            <p>{10 + Math.floor((Math.random() * (90)))}</p>
          </span>

          <span>
            <ShareIcon />
            <p>{10 + Math.floor((Math.random() * (90)))}</p>
          </span>

          <span>
            <ViewsIcon />
            <p>{10 + Math.floor((Math.random() * (90)))}</p>
          </span>

        </div>
      </div>
    </div>
  );
}

export default PostCard;
