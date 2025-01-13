interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IMovieCardProps {
  movie: IMovie;
}

export function MovieCard({ movie }: IMovieCardProps) {
  return (
    <div className="flex flex-col items-center border rounded-lg shadow-md p-4 bg-white">
      <img
        src={movie.Poster}
        alt={`Poster of ${movie.Title}`}
        className="w-full h-80 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        {movie.Title}
      </h2>
      <p className="text-gray-600 text-sm mb-1">Year: {movie.Year}</p>
      <p className="text-gray-600 text-sm mb-1">Type: {movie.Type}</p>
      <a
        href={`https://www.imdb.com/title/${movie.imdbID}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-2"
      >
        View on IMDb
      </a>
    </div>
  );
}
