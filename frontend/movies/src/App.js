import React, {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState( [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ]);
  

  return (
    <>
    <div className="container -fluid movie_app">
    <div className='row'>
    <MovieList movies={movies} />
      </div>
    </div>
    <Routes>
      <Route path='/'element={< Home />}></Route>
    </Routes>
    </>
  );
}

export default App;
