
"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Link from 'next/link';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
  genre_ids: number[];
}

const Prin: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [listType, setListType] = useState<string>('popular');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${listType}?api_key=4f298a53e552283bee957836a529baec`
        );
        const moviesData = response.data.results;
        setMovies(moviesData);
        console.log(moviesData)
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [listType]);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Movies</h1>
      <div className="flex justify-center mb-4">
        <button
          className={`mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
            listType === 'popular' ? 'bg-blue-600' : ''
          }`}
          onClick={() => setListType('popular')}
        >
          Popular
        </button>
        <button
          className={`mr-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ${
            listType === 'top_rated' ? 'bg-green-600' : ''
          }`}
          onClick={() => setListType('top_rated')}
        >
          Top Rated
        </button>
        <button
          className={`bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded ${
            listType === 'upcoming' ? 'bg-purple-600' : ''
          }`}
          onClick={() => setListType('upcoming')}
        >
          Upcoming
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => (

            
            <MovieCard movie={movie} />
            
        ))}
      </div>
    </div>
  );
};

export default Prin;

