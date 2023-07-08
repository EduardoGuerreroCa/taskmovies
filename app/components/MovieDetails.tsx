import React from 'react';

interface MovieDetailsProps {
  movie: {
    title: string;
    overview: string;
    release_date: string;
  };
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-500 mb-4">{movie.release_date}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
