import React from 'react'
import StarRating from '../StarRating'
import './Search.css'

const Search = ({searchValue,handleChange,searchRate,handleSearchRate}) => {
    return (
        <div className="header-container">
            <h1>Movie App</h1>
            <div className="search-container">
                <input type="text" value={searchValue} onChange={handleChange} />
                <StarRating rate={searchRate} handleRate={handleSearchRate} />
            </div>
        </div>
    )
}

export default Search
