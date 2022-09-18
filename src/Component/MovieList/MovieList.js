
import React from 'react'
import "./movieList.css"
import { Link } from 'react-router-dom'
import { MovieCard } from '../MovieCard/MovieCard'

const MovieList = ({movieList}) => {
  return (
    <div>
       <h1>MOVIES GALLERY</h1>
    
    <div className='moviesCard'>
     
      {movieList.map(el=><MovieCard key={el.id} el={el}/>)}
      <Link to={"/addMovie"} ><button style={{ position: "absolute",
    top:"2%",
    right:"10%",
    backgroundColor:"#0a0a23",
    color: "#fff",
    border:"none",
    borderRadius:"10px"}}>Add New Movie</button> </Link>
    </div>
    <div className="credit">Made with <span style={{color: 'tomato'}}>❤</span> by <a href="https://www.learningrobo.com/">Youssef DHAOU</a></div>
    </div> 
  )
}

export default MovieList