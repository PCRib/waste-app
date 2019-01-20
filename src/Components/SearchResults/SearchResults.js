import React from 'react'
import './SearchResults.css';
import SearchCard from "../SearchCards/SearchCard";

export default function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h3>Results</h3>
      <div>
        <SearchCard searchedWaste={props}/>
      </div>
    </div>
  )
}
