import { Link } from "react-router-dom";
function NotFound(){
    return(
        <div>
           <h1> Oops! page not found</h1>
           <h2>To go back Home <Link to="/"> Click Here </Link></h2>
        </div>
    );
}

export default NotFound;