import React, { Component } from "react";

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Search Results</h3>
        <hr/>
            

      </div>
    );
  }
}

function TableHeader(props){
  return <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>First Name</th>
      <th>First Name</th>
      <th>First Name</th>
      <th>First Name</th>
      <th>First Name</th>
      <th>First Name</th>
    </tr>;

}