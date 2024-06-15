import React from 'react'
import "./styles.css"

function SearchBar () {
  return (
    <input 
      type='text'
      placeholder='search here'
      className='searchbar'
      onChange={(event) => {
      setSearchTerm(event.target.value)
      }}
    />
  )
}

export default SearchBar;