import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


const MovieDetail = ({movieList}) => {
  const {id}=useParams()
  const [move,setMove]=useState("")
  useEffect(()=>{
    setMove(movieList.find(el=>el._id===id))
  }, [movieList,id])
  return (
    <div> 
      <h1>{move.Title}</h1>
      <h1>{move.Description}</h1>
      <iframe width="560" height="315" src={move.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <Link to={"/"} > <button type='button'> go back</button></Link>
</div>
  )
}

export default MovieDetail