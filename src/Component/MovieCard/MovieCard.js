import React from 'react'
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css"
import { Link } from 'react-router-dom'
export const MovieCard = ({el}) => {
  return (

<div> 
<div>

    <ul>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src={el.ImageURL} alt=""/></div>
          <div className="card_content">
            <h2 className="card_title">{el.Title}</h2>
            <p className="card_text">{el.Description}</p>
            <Link style={{textDecoration:"none"}} to={`/movieDetail/${el._id}`}>   <button className="btn card_btn">View Details</button></Link>
    
            <ReactStars
    count={10}
    value={el.rating}
    size={24}
    activeColor="#ffd700"
  />
          
          </div>   
        </div>
      </li>
    </ul>
 
</div>


  </div> 
  )
}
