import {BrowserRouter, Switch, Route} from "react-router-dom"


import GameList from './GameList';
import MovieList from './MovieList';
import BookList from './BookList';
import NavBar from './NavBar';
import ReviewList from "./ReviewList";


function App() {
  return (
    <BrowserRouter>
    <div>
      
      <NavBar/>
  
      <Switch>
       
    
        <Route exact path="/movies">
          <MovieList/>
        </Route>
      
        <Route exact path="/books">
          <BookList/>
        </Route>

        <Route exact path="/games">
          <GameList/>
        </Route>

        <Route exact path="/reviews">
          <ReviewList/>
        </Route>
      </Switch>
       
    </div>
    </BrowserRouter>
      
      
      
     
  );
}

export default App;
