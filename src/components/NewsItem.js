
import React from 'react';
import image from '../assets/news-icon.jpg';

const NewsItem = ({ title, author, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" style={{ width: '18rem' }}>
      <img src={src ? src : image} className="card-img-top" alt="News Thumbnail"style={{height:"200px",width:"200px"}} />
      <div className="card-body">
        <h3 className="card-author">{author}</h3>
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description ? description.slice(0,90):"This is breaking news right now "}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
