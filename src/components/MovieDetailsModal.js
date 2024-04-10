import React from 'react';
import Modal from 'react-bootstrap-modal';
// import './MovieDetailsModal.css';

const MovieDetailsModal = ({ movie, onClose, loading, error }) => {
  return (
    <Modal
      show={true}
      onHide={onClose}
      dialogClassName="custom-modal"
      contentClassName="custom-modal-content"
    >
      <Modal.Header closeButton>
        <Modal.Title>{movie.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-modal-body">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            {loading ? (
              <p>loading</p>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : (
              <div className="row row-container">
                <div className="col-md-6">
                  <img src={movie.Poster} className="card-img-top" alt={movie.Poster} style={{ height: "300px", width: "300px", margin: 20, }} />
                </div>
                <div className="col-md-6">
                  <p><strong>Plot:</strong> {movie.Plot}</p>
                  <p><strong>Genre:</strong> {movie.Genre}</p>
                  <p><strong>Runtime:</strong> {movie.Runtime}</p>
                  <p><strong>Released:</strong> {movie.Released}</p>
                  <p><strong>Writer:</strong> {movie.Writer}</p>
                  <p><strong>Actors:</strong> {movie.Actors}</p>
                  <p><strong>Awards:</strong> {movie.Awards}</p>
                  <p><strong>Released:</strong> {movie.Released}</p>
                </div>
              </div>
            )}          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MovieDetailsModal;
