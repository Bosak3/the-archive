import { NavLink } from "react-router-dom";
import "./styling/NavBar.css"

function NavBar() {


    return(
      <div className="nav">
        <NavLink to="/games" exact className="nav">Games</NavLink>
        <br></br>
        <NavLink to="/books" exact>Books</NavLink>
        <br></br>
        <NavLink to="/movies" exact>Movies</NavLink>
        <br></br>
        <NavLink to="/reviews" exact>Reviews</NavLink>
        
      </div>


    )

}


export default NavBar