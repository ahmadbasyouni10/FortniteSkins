import React from 'react'
import { useState } from 'react'
import './Card.css'
import outline from '../assets/jsjj.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'
import more from '../assets/more.png'


const Card = (props) =>  {

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <Link to={'info/'+ props.id}>
            <img className="outline" src={outline} alt="outline"/>
            <h1 className="title">{props.title}</h1>
            <h2 className="health">{props.health}</h2>
            <h2 className="description">{props.description}</h2>
            </Link>
      </div>
  );
};

export default Card;