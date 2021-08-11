import {useState} from 'react';
import { MovieList } from './movieList';
import { Search } from './search';
import {AddMovie} from "./addMovie";
import { movieData } from './movieData';

function Home() {
  const [movies, setMovie] = useState(movieData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  const add=(newMovie)=>{setMovie(movie=>([...movie,newMovie]))};

  return (
    <div className="App">
      <Search setSearchRating={setSearchRating} searchRating={searchRating} setSearchTitle={setSearchTitle} />
      <MovieList searchRating={searchRating} searchTitle={searchTitle} movies={movies} />
      <AddMovie add={add}/>
    </div>
  );
}

export default Home;
