import { useRouter } from 'next/router';
import React from 'react';

interface MovieDetailsProps {
  movie: {
    title: string;
    overview: string;
    release_date: string;
  };
}
const router = useRouter();
const id = router.query.id;

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {


  console.log("Leyendo: "+ {id})
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-500 mb-4">{movie.release_date}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
