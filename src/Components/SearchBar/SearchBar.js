import React, { Component } from 'react'
import './SearchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <div>
          <form ref={form =>(this.inputForm = form)} onSubmit={(e)=> this.props.getWasteData(e,this.inputForm.searchedInput.value)}>
          <input type="search" name="searchedInput" placeholder="Search for Waste"/>
          <button className="btn"></button>
          </form>
        </div>
      </div>
    )
  }
}
