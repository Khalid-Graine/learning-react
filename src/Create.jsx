import { useState } from "react";

const CreateNewBook = () => {
  const [title, setTitle] = useState("");
  const [author,setAuthor] = useState("");
  const hundleSubmit = (e) => {
    e.preventDefault();
    const book = {title,author};

  }
  return (
    <div className="bg-gray-400 p-4">
      <form onSubmit={(e) => hundleSubmit(e)} className="flex flex-col gap-2">
        <label>title</label>
        <input type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title} />

        <label >
        author
        </label>
        <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} />

        <button type="submit"  className="bg-blue-500 p-2 rounded-sm text-white">Submit</button>
      </form>
    </div>
  );
};

export default CreateNewBook;
