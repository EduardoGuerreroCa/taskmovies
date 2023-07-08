import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import axios from 'axios';
import MovieDetails from '../../components/MovieDetails';

interface Movie {
  title: string;
  overview: string;
  release_date: string;
}

interface MoviePageProps {
  movie: Movie;
}

const MoviePage: React.FC<MoviePageProps> = ({ movie }) => {

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
};
const router = useRouter();
const {id} = router.query;
console.log("Llego aqui");

export async function getServerSideProps(context: GetServerSidePropsContext) {


  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4f298a53e552283bee957836a529baec`
    
  );
  console.log("Probando"+id);
  const movie = response.data;

  return {
    props: {
      movie,
    },
  };
}

export default MoviePage;
