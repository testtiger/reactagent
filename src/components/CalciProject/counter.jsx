import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
    //this.state = { count: 0 };
  }
   //this.handleClick = this.handleClick.bind(this);
   state = { count: 0 };

  handleClick() {
    var counter1 = this.state.count;
    console.log(counter1);
    counter1 = counter1+1;
      console.log(counter1);
    this.setState({ count: counter1 });
      console.log(this.state.count);
  }
  render() {
    return (
      <div>
        <h1>
          count is:
          {this.state.count}
        </h1>
        <button className="btn btn-secondary btn-sm" onClick={this.handleClick.bind(this)}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
