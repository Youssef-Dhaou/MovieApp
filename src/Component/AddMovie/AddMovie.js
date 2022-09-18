import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
 const AddMovie = ({getNewMovie}) => {
     const [show,setShow] = useState(false);
     console.log(show);
     const [newMovie,setNewMovie]= useState({
         "title":"",
         "description":"",
         "posterUrl":"",
         "rating":0,

     });
     const navigate=useNavigate()
     const handleClick = () =>{
         if (newMovie.title){
             getNewMovie(newMovie);

             setNewMovie({
                 "title":"",
                 "description":"",
                 "posterUrl":"",
                 "rating":0,
        
             });
             navigate("/")
             handleClose()
         } else{
             alert("title is required")
         }
     }
     const handleChange=(e)=>{
setNewMovie({...newMovie,[e.target.name]:e.target.value})
     }
     const handleClose =() => setShow(true);
  return (
    <div><>

  <Modal.Header closeButton>
    <Modal.Title>Modal</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <input type="text" name='title' placeholder='title'  onChange={handleChange}/>
  <input type="text" placeholder='desc' name='description' onChange={handleChange} />
  <input type="url" placeholder='url' name='posterUrl' onChange={handleChange} />
  <input type="number" placeholder='rate'  name='rating' onChange={handleChange}/>
  </Modal.Body>

  <Modal.Footer>
     <Link style={{textDecoration:"none"}} to={"/"}><Button variant="secondary">Close</Button> </Link> 
    <Button variant="primary" onClick={handleClick}>Save changes</Button>
  </Modal.Footer>
</>
</div>
  )
}
export default AddMovie