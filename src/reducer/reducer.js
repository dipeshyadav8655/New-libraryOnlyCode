import {  SEARCH_BOOKS, searchBooks } from '../action/actions'

const initialState = {
    searchTerm: "",
    searchedBooks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_BOOKS:
        let filteredData = []
        axios
        .get("http://68.178.162.203:8080/application-test-v1.1/books")
        .then((res) => {
          searchBooks = res.data.data;
        });
        searchBooks.map()
        // Perform your search logic here using action.payload (search term)
        // Update searchedBooks with the search results
        return {
          ...state,
          searchTerm: action.payload,
          searchedBooks: /* Perform your search logic here */'',
        };
      default:
        return state;
    }
  };
  
  export default reducer;