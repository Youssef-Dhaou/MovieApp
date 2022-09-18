import React from 'react'
import Stars from "react-rating-stars-component";

export const Filter = ({setFilterByName,setFilterByRate}) => {
  const ratingChanged = (newRating) =>{
    setFilterByRate(newRating)
  }
  return (
    <div style={{display:"flex", gap:"3rem", margin:"2rem auto"}}><input style={{boxShadow:"0 0 15px 4px rgba(0,0,0,0.06)",padding:"10px",
    borderRadius:'10px' }} onChange={(e)=> setFilterByName(e.target.value)} type="text" placeholder='search by title' />
     <Stars size={25} onChange={ ratingChanged}  count={10}/>
     </div>
  )    
}
export default Filter;
