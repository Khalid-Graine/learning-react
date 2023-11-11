import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import BooksList from "./BooksList";

function App() {
  const [books, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8000/books")
      .then((res) => {
        if(res.ok) {
          return res.json();
        } else {
          throw Error('could not fetch the data');
        }
        
      })
      .then((data) => {
        setBook(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {error && <div className="text-red-500">{error}</div>}
      {isLoading && <p>loading ... </p>}
      {books && <BooksList books={books} />}
    </div>
  );
}

export default App;
