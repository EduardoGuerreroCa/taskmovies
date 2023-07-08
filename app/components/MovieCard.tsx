import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: string;
    genre_ids: number[];
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { id, title, poster_path, release_date, vote_average, genre_ids } = movie;
  const router = useRouter();

  const handleClick = () => {
    router.push(`pages/movies/${id}`);
  };

  return (
   
      <div className="w-64 h-auto rounded overflow-hidden shadow-lg m-2">
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{movie.title}</div>
          <p className="text-gray-700 text-base">{movie.release_date}</p>
          <p className="text-gray-700 text-base">{movie.vote_average}</p>
          <div className="flex justify-center">
            {genre_ids.map((genreId) => (
              <span
                key={genreId}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                {genreId}
              </span>
            ))}
            <button onClick={handleClick}>Movie Details</button>
          </div>
        </div>
      </div>
   
  );
};

export default MovieCard;
