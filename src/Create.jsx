import { useState } from "react";
import { useHistory } from "react-router-dom"

const CreateNewBook = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const book = { title, author };

  const [loading,setIsLoading] = useState(false);

  const hundleSubmit = (e) => {
    e.preventDefault();
     setIsLoading(true)
    fetch("http://localhost:8000/books/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    }).then((res) => {
        if(res.ok) {
          setIsLoading(false);
          history.push('/');
        }
     
    });
  };
  return (
    <div className="bg-gray-400 p-4">
      <form onSubmit={(e) => hundleSubmit(e)} className="flex flex-col gap-2">
        <label>title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>author</label>
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />

        <button type="submit" className="bg-blue-500 p-2 rounded-sm text-white">
          Submit
        </button>
      {loading &&  <p className="bg-green-300"> loading ...</p>}

      </form>
    </div>
  );
};

export default CreateNewBook;
