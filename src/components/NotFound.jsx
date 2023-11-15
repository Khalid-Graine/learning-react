import {Link} from "react-router-dom"
const NotFound = () => {
    return ( 
    <div className="text-red-500">
    <p> 404 the pae is nout found</p>
     <Link to="/">return to home page</Link>
    </div> );
}
 
export default NotFound;