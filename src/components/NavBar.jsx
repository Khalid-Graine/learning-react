import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="bg-gray-200 flex justify-between p-4">
      <div>Logo</div>
      <ul className="flex gap-3">
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/create">New book</Link>
        </li>
        <li>
        <Link to="/hooks">Hooks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
