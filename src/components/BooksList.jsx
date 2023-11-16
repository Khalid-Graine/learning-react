import React from "react";
import { Link } from "react-router-dom";

const BooksList = ({ books }) => {
  
  () => {
    console.log('BooksList is rendered');
  }
  return (
    <ul className="flex flex-col gap-2">
      {books.map((book) => (
        <li key={book.id} className="border">
          <p>{book.title}</p>
          <p>{book.author}</p>
          <Link to={`/books/${book.id}`}>
            <div className="bg-blue-300 px-3 rounded-sm text-center">see</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(BooksList);
