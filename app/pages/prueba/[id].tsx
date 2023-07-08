import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import MovieDetails from '../../components/MovieDetails';

interface Movie {
  title: string;
  overview: string;
  release_date: string;
}

interface MoviePageProps {
  movie: Movie;
}

const MoviePage: React.FC<MoviePageProps> = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4f298a53e552283bee957836a529baec`
        );
        const movieData = response.data;
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!movie) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MoviePage;
