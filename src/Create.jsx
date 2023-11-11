import { useState } from "react";

const CreateNewBook = () => {
  const [title, setTitle] = useState("");
  const [author,setAuthor] = useState("");

  return (
    <div className="bg-gray-400 p-4">
      <form>
        <label>title</label>
        <input type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title} />

        <label >
        author
        </label>
        <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} />

       
      </form>
      <p>{author}</p>
    </div>
  );
};

export default CreateNewBook;
