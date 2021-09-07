import React from 'react';

function Card(props) {
  return (
    <div className="card-container">
      <div className="card-tag-wrapper">
          {props.movie.media_type ? (
            <span className="tag">{props.movie.media_type}</span>
          ) : (
            <span className="tag">Others</span>
          )}

          <span className="tag">{props.movie.original_language}</span>
          <span className="tag">{props.movie.vote_average}</span>
        </div>
      <header className="card-header">
        {props.movie.title ? (
          <h2 className="card-title">{props.movie.title}</h2>
        ) : (
          <h2 className="card-title">{props.movie.name}</h2>
        )}
      </header>
      <div className="card-content-wrapper">

        <div className="card-desc-wrapper">
          <hr className="card-divider" />
          <p className="card-desc">{props.movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
