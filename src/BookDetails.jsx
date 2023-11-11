import {useParams} from "react-router-dom"

const BookDetails = () => {
    const { id } = useParams()
    return ( 
        <div>
            books details - {id}
        </div>
     );
}
 
export default BookDetails;