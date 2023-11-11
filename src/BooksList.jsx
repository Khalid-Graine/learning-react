const BooksList = ({ books }) => {
  return (
    <ul className="flex flex-col gap-2">
      {books.map((book) => (
        <li key={book.id} className="border">
          <p> {book.title} </p>
          <p> {book.author}</p>
         
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
