interface InitialState {
  searchInput: string;
}
const initialState: InitialState = {
  searchInput: '',
};

const inputReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'HANDLE_INPUT_CHANGE':
      return { ...state, searchInput: action.payload };

    default:
      return state;
  }
};

export default inputReducer;
