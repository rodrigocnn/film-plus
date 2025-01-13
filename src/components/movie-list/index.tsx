import { MovieCard } from '../movie-card';

interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface ImoviesListProps {
  list: IMovie[];
}

export function MovieList(props: ImoviesListProps) {
  const { list } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
      {list?.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
    </div>
  );
}
