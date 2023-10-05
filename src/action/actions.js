export const SEARCH_BOOKS = "SEARCH_BOOKS";

export const searchBooks = (searchTerm) => ({
  type: SEARCH_BOOKS,
  payload: searchTerm,
});