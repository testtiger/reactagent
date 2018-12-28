import React from "react";
import { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      op1: 3,
      op2: 4,
      result: undefined
    };
  }
  /*  state = {
    op1: 3,
    op2: 4,
    result: undefined
  }; */

  handelOpernad2Change(event) {
    //alert(event.target.value);
    this.setState({ op2: +event.target.value });
  }
  handelOpernad1Change(event) {
   // alert(event.target.value);
    this.setState({ op1: +event.target.value });
  }
  add() {
    console.log("addition is called");
    var op1 = this.state.op1;
    var op2 = this.state.op2;
    this.setState({ result: op1 + op2 });
  }
  div() {
    console.log("divsion is called");
    var op1 = this.state.op1;
    var op2 = this.state.op2;
    this.setState({ result: op1 / op2 });
  }
  sub() {
    console.log("sub is called");
    var op1 = this.state.op1;
    var op2 = this.state.op2;
    this.setState({ result: op1 - op2 });
  }
  mul() {
    console.log("mul is called");
    var op1 = this.state.op1;
    var op2 = this.state.op2;
    this.setState({ result: op1 * op2 });
  }
  copyResultToOperand1() {
    console.log(this.state.result);
    this.setState({ op1: this.state.result });
  }

  render() {
    return <div>
        <label>
          Operand1
          <input type="text" value={this.state.op1} onChange={this.handelOpernad1Change.bind(this)} />
        </label>

        <br />
        <label>
          Operand2
          <input type="text" value={this.state.op2} onChange={this.handelOpernad2Change.bind(this)} />
        </label>

        <br />
        <button onClick={this.add.bind(this)}>Add</button>
        <br />
        <button onClick={this.sub.bind(this)}>Sub</button>
        <br />
        <button onClick={this.div.bind(this)}>Div</button>
        <br />
        <button onClick={this.mul.bind(this)}>Mul</button>
        <br />
        <button onClick={this.copyResultToOperand1.bind(this)}>
          copyResultToOperand1
        </button>
        <h4>
          Result is:
          {this.state.result ? this.state.result : 0}
        </h4>
      </div>;
  }
}

export default Calculator;
