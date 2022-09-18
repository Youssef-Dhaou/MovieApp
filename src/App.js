import { React ,useState } from 'react';

import { Routes, Route } from "react-router-dom";

import './App.css';
import { movieList } from './data';

import AddMovie  from './Component/AddMovie/AddMovie';
import Filter from './Component/Filter/Filter';
import MovieDetail from './Component/MovieList/MovieDetail';
import  MovieList from './Component/MovieList/MovieList';
function App() {
  const [moviesM,setMoviesM] = useState(movieList)
  console.log(movieList);

const getNewMovie =(newM) =>{setMoviesM([...moviesM,{...newM,id:moviesM.length}])}
const [filterByName,setFilterByName]=useState("")
const [filterByRate ,setFilterByRate] = useState(0)

return (
    <div  className="App" >
  <Routes>
      <Route path="/movieDetail/:id" element={<MovieDetail  movieList={moviesM}/>}/>
      <Route path="/" element={<div className='nav'> <Filter setFilterByName={setFilterByName} setFilterByRate={setFilterByRate}/> <MovieList  movieList={moviesM.filter((el)=>el.Title.toLowerCase().includes(filterByName.trim().toLowerCase())&&el.rating>=filterByRate)}/> 
       </div> }/>
      <Route path="/addMovie" element={<AddMovie getNewMovie={getNewMovie}/>}/>
 
  </Routes>
     </div>
  );
}

export default App;
