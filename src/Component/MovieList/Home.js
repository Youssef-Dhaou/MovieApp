import React from 'react'
import { Stars } from 'react-rating-stars-component';

import { Link } from 'react-router-dom';

import AddMovie from './../AddMovie/AddMovie';

const Home = () => {

  return (

    <div> <div className="social-btn">
    <h1> Welcome to our movie App</h1>
   
    <nav>
      <button>
      <i className="fas fa-play" /> MOVIE LIST
    </button>
      </nav>	
      </div></div>
  )
}

export default Home
