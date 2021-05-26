import React from 'react'
import StarRating from '../StarRating'
import './MovieCard.css'

const MovieCard = ({film}) => {
    // {
    //     id: Math.random(),
    //     image: "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
    //     rating: 5,
    //     name: "Star Wars: The Rise Of Skywalker",
    //     date: "December 2019",
    //   }
    return (
        <div className = "movie-card">
            <StarRating rate={film.rating}/>
            <img src={film.image} alt={film.name}/>
            <h3>{film.name}</h3>
            <p>{film.date}</p>
        </div>
    )
}

export default MovieCard
