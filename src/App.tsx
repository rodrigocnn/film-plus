import logo from './assets/logo.png';
import { Button } from './components/button';
import { Input } from './components/input';
import { Loading } from './components/loading';
import { MovieList } from './components/movie-list';
import { useMovie } from './hooks/useMovie';

function App() {
  const {
    searchInput,
    handleInputChange,
    handleClickSearch,
    response,
    loading,
  } = useMovie();

  return (
    <div className="w-[1024px] mx-auto pt-8">
      <div className="flex justify-center ">
        <img width={200} className="" src={logo} />
      </div>

      <div className="flex space-x-4 ">
        <Input value={searchInput} onChange={handleInputChange} />
        <Button onClick={handleClickSearch}>Pesquisar</Button>
      </div>

      {loading && <Loading />}
      <MovieList list={response?.Search} />
    </div>
  );
}

export default App;
