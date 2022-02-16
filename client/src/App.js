import {BrowserRouter, Switch, Route} from "react-router-dom"


import GameList from './lists/GameList';
import MovieList from './lists/MovieList';
import BookList from './lists/BookList';
import ReviewList from "./lists/ReviewList";
import Home from "./lists/Home";



function App() {
  return (
    <BrowserRouter>
  
    <div>
      
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

        <Route exact path="/">
          <Home/>
        </Route>

        
      </Switch>
       
    </div>
    </BrowserRouter>
      
      
      
     
  );
}

export default App;
