import "./App.css";
import BooksList from "./BooksList";
import useFetch from "./usefetch";

function App() {
  const {
    data: books,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/books");

  return (
    <div className="App">
      {error && <div className="text-red-500">{error}</div>}
      {isLoading && <p>loading ... </p>}
      {books && <BooksList books={books} />}
    </div>
  );
}

export default App;
