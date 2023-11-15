import { useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book, error, isLoading } = useFetch(
    "http://localhost:8000/books/" + id
  );

  return (
    <div>
      {error && <div className="text-red-500">{error}</div>}
      {isLoading && <p>loading ... </p>}
      {book && 
      <div>
        {book.title}
      </div>
      }
    </div>
  );
};

export default BookDetails;
