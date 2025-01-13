import { useGet } from './useGet';
import { useDispatch, useSelector } from 'react-redux';

export function useMovie() {
  const dispatch = useDispatch();
  const { get, response, loading } = useGet();
  const { searchInput } = useSelector((state: any) => state.inputReducer);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'HANDLE_INPUT_CHANGE', payload: event.target.value });
  };

  const handleClickSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    get(`https://www.omdbapi.com/?s=${searchInput}&apikey=2f71c48f&`);
  };

  return {
    handleInputChange,
    handleClickSearch,
    searchInput,
    response,
    loading,
    dispatch,
  };
}
