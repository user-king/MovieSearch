import React from 'react';

const MovieCard = ({ title, year, imdbID, type, image, onClick }) => {
  return (
    <div className="card movie-card" onClick={onClick} style={{padding:'20px', backgroundColor:'orange', borderRadius:'10px' }}>
      <img src={image} className="card-img-top" alt={title} style={{ height: "300px" , width: "300px", margin:20, }}  />
      <div className="card-body">
        <h5 className="card-title">{title} {year}</h5>  
        <p className="card-text"><strong>Type</strong> : {type}, <strong> Imdb ID:</strong> {imdbID} </p>
      </div>
    </div>
  );
};

export default MovieCard;
