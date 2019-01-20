import React, { Component } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchResults from "./Components/SearchResults/SearchResults";
import './App.css';

class App extends Component {
  state = {
    searchedWaste:[{
      category:"",
      body:""
    }
    ]
  }
  getWasteData = (e,searchedWord) => {
    e.preventDefault();
    let promise = fetch("https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000")
    promise.then(resp => {return resp.json()})
    .then(data => {
      let searchedWaste = data.filter(result => {
        return result.keywords.includes(searchedWord)
      })
      // let filtered = searchedWaste[0].body.replace(/&lt;li&gt;|&lt;ul&gt;|&lt;strong&gt;|&lt;|strong&gt;&lt;|li&gt;|ul&gt;|/gi,"")
      // console.log(filtered)
      this.setState({
        searchedWaste
      })
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Toronto Waste Lookup</h1>
        </header>
        <SearchBar getWasteData={this.getWasteData}/>
        <SearchResults {...this.state.searchedWaste}/>
      </div>
    );
  }
}

export default App;
