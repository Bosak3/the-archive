import { NavLink } from "react-router-dom";


function NavBar() {


    return(
      <div>
        <NavLink to="/games" exact>Games</NavLink>
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