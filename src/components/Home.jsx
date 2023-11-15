import useFetch from "./usefetch";
import BooksList from "./BooksList";

const Home = () => {
  const {
    data: books,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/books");

  return (
    <div className="p-4">
      {error && <div className="text-red-500">{error}</div>}
      {isLoading && <p>loading ... </p>}
      {books && <BooksList books={books} />}
    </div>
  );
};

export default Home;
