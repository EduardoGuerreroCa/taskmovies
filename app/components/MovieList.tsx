
"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  // Agrega más propiedades según tus necesidades
}

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: '4f298a53e552283bee957836a529baec',
          },
        });

        const moviesData = response.data.results;
        const formattedMovies: Movie[] = moviesData.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          poster_path: movie.poster_path,
          // Agrega más propiedades según tus necesidades
        }));

        setMovies(formattedMovies);
      } catch (error) {
        console.error('Error al obtener la lista de películas:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Películas Populares</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <a href={`/movies/${movie.id}`}>Ver detalles de la película</a>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
