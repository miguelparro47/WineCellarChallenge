import React, { Component } from 'react';
import ListWines from './components/ListWines.js';
import AddWine from './components/AddWine.js';
import { CSVLink } from "react-csv";

class App extends Component {
  state = {
    wines : [
      {name: 'Parros Special', vineyard:'Parros Vineyard', year:'2002', type: 'Red', id:1},
      {name: 'Oaked Chardonnay', vineyard:'Portos Vineyard', year:'2004', type: 'Rose', id:2},
      {name: 'Unoaked Chardonnay', vineyard:'Lisbons Vineyard', year:'2005', type: 'White', id:3},
      {name: 'Sauvignon Blanc', vineyard:'Portos Vineyard', year:'2006', type: 'Red', id:4},
      {name: 'Parros Special', vineyard:'Parros Vineyard', year:'2006', type: 'Rose', id:5}
    ],
    title: 'React Simple CRUD Application',
      act: 0,
      index: ''
  }
  
  addWine = (wine) => {
    wine.id = Math.max.apply(Math, this.state.wines.map(function(wine) { return wine.id; })) +1;
    let newWines = [...this.state.wines, wine]
    this.setState({
      wines: newWines
    })
  }

  render() {
    return (
      <div className="App">
        <ListWines wines={this.state.wines}/>
        <CSVLink data={this.state.wines} target="_blank"> Download our Wine List</CSVLink>
        <AddWine addWine={this.addWine}/>
        </div>
      );
  }
  
}

export default App;
