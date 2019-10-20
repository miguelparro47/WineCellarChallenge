import React, { Component } from 'react';

class ListWines extends Component{

   renderTableHeader() {
      let header = Object.keys(this.props.wines[0])
      return header.slice(0,4).map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      }) 
   }

     renderTableData() {
        return this.props.wines.map((wine, index) => {
           const { id, name, vineyard, year, type } = wine //destructuring
           return (
              <tr key={id}>
                 <td>{name}</td>
                 <td>{vineyard}</td>
                 <td>{year}</td>
                 <td>{type}</td>
              </tr>
           )
        })
    }

     render() {
        return (
           <div>
              <h1 id='title'>Parro's own wines</h1>
              <table id='wines'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
}

export default ListWines