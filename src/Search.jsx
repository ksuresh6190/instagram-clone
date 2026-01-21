import React, { useState } from 'react'

function Search() {
    const [search, setSearch] = useState(false);

  const SearchBar = () =>{
    setSearch(!search)
  };
  const closeSearchBar = () =>{
    setSearch(false)
  };

  return (
    <div>
        search
        {search ? (
        <div className="search">
          <div className="s-1">
              <h2>Search</h2>
          </div>
          <div className="s-2">
            <input type="text" placeholder="Search"/>
            <p onClick={closeSearchBar}>x</p>
          </div>
        </div>) : (<div></div>)}
    </div>
  )
}

export default Search
