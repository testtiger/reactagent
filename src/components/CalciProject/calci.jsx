import { Component } from "react";
import React from "react";
import Numbers from "./numbers";
import Operators from "./operators";

//handleOperationClick;
//handleOperandClick;
class Calci extends Component {
  constructor(props) {
    super(props);
    this.state = { val: 0 };
  }

  splitString(input) {
      var obj=input.split("*|+|//|-");
      obj.array.forEach(element => {
          
      });
  }

  handleCalaculation(e) {
    let input = e.target.value;
    alert(this.state.val);
  }
  handleInputChange(e) {
    let input = e.target.value;
    this.setState({ val: input });
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.val}
            onChange={this.handleInputChange.bind(this)}
          />
        </div>
        <div>
          <button onClick={this.handleCalaculation.bind(this)}>
            Calculate
          </button>
        </div>
        <div>
          <Numbers />
        </div>
        <div>
          <Operators />
        </div>
      </div>
    );
  }
}

export default Calci;
